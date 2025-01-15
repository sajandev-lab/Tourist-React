

import React, { useEffect } from 'react';
import about_bg from '../../assets/images/about.jpg'

function AboutBlock({ aboutblock }) {
  //console.log(aboutblock);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100" src={aboutblock.left_image.url} alt={aboutblock.left_image.alt}   style={{ objectFit: 'cover'}} />
              </div>
            </div>
            <div className="col-lg-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">{aboutblock.sub_heading}</h6>
              <h1 className="mb-4" dangerouslySetInnerHTML={{ __html: aboutblock.heading }} />
              <div className="mb-4" dangerouslySetInnerHTML={{ __html: aboutblock.content }} />
              <div className="row gy-2 gx-4 mb-4">
                {Array.isArray(aboutblock.about_content_list) && aboutblock.about_content_list.length > 0 ? (
                  aboutblock.about_content_list.map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>{item.list}</p>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href={aboutblock.button.url} target={aboutblock.button.target}>{aboutblock.button.title}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutBlock
