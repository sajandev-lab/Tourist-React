import React, { useState, useEffect } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dropdown hover effect for desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle dropdown hover for desktop
  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Services</a>
              <a href="package.html" className="nav-item nav-link">Packages</a>
              <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className={`dropdown-menu m-0 ${isDropdownOpen ? 'show' : ''}`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <a href="destination.html" className="dropdown-item">Destination</a>
                  <a href="booking.html" className="dropdown-item">Booking</a>
                  <a href="team.html" className="dropdown-item">Travel Guides</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary rounded-pill py-2 px-4">Register</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
