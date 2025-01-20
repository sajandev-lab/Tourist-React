import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicBlock from '../components/blocks/DynamicBlock';

function Servicespage() {
  const [pageData, setPageData] = useState();
  const [error, setError] = useState(null);
  const pageId = 157; // Replace with your actual page ID
  const apiUrl = `https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/pages/${pageId}`; // Adjust as needed

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setPageData(response.data.acf); // Assuming ACF data is under 'acf'
      } catch (err) {
        console.error('Error fetching page data:', err);
        setError(err);
      }
    };

    fetchPageData();
  }, [apiUrl]);

  if (error) {
    return <div>Error loading page data.</div>;
  }
  //console.log(pageData);
  if (!pageData) {
    return <div>Loading...</div>;
  }

  // Check if 'flexible_content_field' exists
  if (!pageData) {
    return <div>No content available.</div>;
  }

  return (
    <div>
      <DynamicBlock block={pageData} />
    </div>
  );
}

export default Servicespage;