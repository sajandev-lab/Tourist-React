import React, { useState, useEffect } from 'react';

function TopHeader() {
  const [option, setOption] = useState(null); // Holds the fetched data
    const [error, setError] = useState(null); // Holds error messages
    const [loading, setLoading] = useState(true); // Tracks loading state

    useEffect(() => {
        // Fetch the option from the WordPress REST API
        const fetchOption = async () => {
            try {
                const response = await fetch('https://dev-tourist-react.pantheonsite.io/wp-json/custom/v1/options');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setOption(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOption();
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    // Conditional rendering based on loading, error, and fetched data
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
          <div className="row gx-0">
              <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                  <div className="d-inline-flex align-items-center" style={{ height: '45px'}}>
                      <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{option.top_address}</small>
                      <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>{option.top_phone_number}</small>
                      <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{option.top_email_id}</small>
                  </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                  {option.top_social && option.top_social.length > 0 ? (
                       <div className="d-inline-flex align-items-center" style={{ height: '45px'}}>
                          {option.top_social.map((item, index) => (
                              <a key={index} className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href={item.url} target='_blank'>
                                <i className={`fab ${item.add_icon_text} fw-normal`}></i>
                              </a>
                          ))}
                      </div>
                  ) : (
                      <p>No repeater data available.</p>
                  )}
              </div>
          </div>
      </div>
    </>
  )
}

export default TopHeader
