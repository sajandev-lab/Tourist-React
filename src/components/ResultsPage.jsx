import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ResultsPage() {

    const location = useLocation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Extract the search query from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');

  useEffect(() => {
    // Set the page title dynamically
    document.title = searchQuery
      ? `Results for "${searchQuery}"`
      : 'Search Results';

    if (searchQuery) {
      setIsLoading(true);
      fetch(`https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/search?search=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery]);

  return (
        <div>
        <h1>Results for "{searchQuery}"</h1>
        {isLoading && <p>Loading...</p>}
        {results.length > 0 ? (
            <ul>
            {results.map((result) => (
                <li key={result.id}>
                    <a href={result.url}>{result.title}</a>
                </li>
            ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
        </div>
    );
}

export default ResultsPage
