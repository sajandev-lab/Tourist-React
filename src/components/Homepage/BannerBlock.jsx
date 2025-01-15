

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BannerBlock({bannerblock}) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/results?search=${encodeURIComponent(query)}`);
    }
  };

  const heroheader = {
      background: `linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)),url(${bannerblock.background_image.url}),center center,no-repeat`,
      backgroundSize: 'cover', // Cover the container
      backgroundRepeat: 'no-repeat', // Avoid repeating
      backgroundPosition: 'center center', // Center the image
  };
  //console.log(handleSearch);
  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={heroheader}>
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{bannerblock.heading}</h1>  
                <p className="fs-4 text-white mb-4 animated slideInDown" dangerouslySetInnerHTML={{ __html: bannerblock.content }} />
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <form onSubmit={handleSearch}>
                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Eg: Thailand"
                    />
                    <button className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px'}} type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BannerBlock
