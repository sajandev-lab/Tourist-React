import React, { useState, useEffect } from 'react';
import TopNavMenu from '../components/TopNav';

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
            <TopNavMenu />
            <a href="" className="btn btn-primary rounded-pill py-2 px-4">Register</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
