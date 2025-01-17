import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import package_1 from '../assets/images/package-1.jpg'
import package_2 from '../assets/images/package-2.jpg'
import package_3 from '../assets/images/package-3.jpg'
import FooterCopyrightMenu from './FooterCopyrightMenu';

function Footer() {
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

    const show_footer_menu = option.show_footer_menu;
    return (
        <>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {show_footer_menu ? (
                        <FooterMenu />
                    ) : (
                        <p className="text-center">No Menu Found.</p>
                    )}
                    
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">{option.footer_contact_heading}</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{option.footer_company_address}</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{option.footer_phone_number}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{option.footer_email_id}</p>
                        {option.footer_social && option.footer_social.length > 0 ? (
                            <div className="d-flex pt-2">
                                {option.footer_social.map((item, index) => (
                                    <a  key={index} className="btn btn-outline-light btn-social" href={item.url}><i className={`fab ${item.add_icon_text}`}></i></a>
                                ))}
                            </div>
                        ) : (
                            <p>No repeater data available.</p>
                        )}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">{option.gallery_heading}</h4>
                        {option.image_grid && option.image_grid.length > 0 ? (
                            <div className="row g-2 pt-2">
                                {option.image_grid.map((item, index) => (
                                    <div key={index} className="col-4">
                                        <img className="img-fluid bg-light p-1" src={item.image.url} alt={item.image.alt} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No repeater data available.</p>
                        )}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">{option.newsletter_heading}</h4>
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: option.newsletter_content }} />
                        <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; {option.copyright_text}
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <FooterCopyrightMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
