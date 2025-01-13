import React, { useEffect, useState } from "react";
import axios from 'axios';

function BookingBlock({bookingblock}) {
    const bookingBg = {
        background: `linear-gradient(rgba(15, 23, 43, .7), rgba(15, 23, 43, .7)),url(${bookingblock.background_image.url}),center center,no-repeat`,
        backgroundSize: 'cover', // Cover the container
        backgroundRepeat: 'no-repeat', // Avoid repeating
        backgroundPosition: 'center center', // Center the image
    };

    const [formHtml, setFormHtml] = useState("");
    useEffect(() => {
        const fetchForm = async () => {
            try {
                const response = await axios.get(
                    "https://dev-tourist-react.pantheonsite.io/wp-json/custom/v1/render-shortcode",
                    {
                        params: {
                            shortcode: "[contact-form-7 id='147' title='Contact form']",
                        },
                    }
                );
                setFormHtml(response.data.acf);
                console.log(formHtml);
            } catch (error) {
                console.error("Error fetching the form:", error);
            }
        };

        fetchForm();
    }, []);
  return (
    <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="booking p-5" style={bookingBg}>
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 text-white">
                            <h6 className="text-white text-uppercase">{bookingblock.sub_heading}</h6>
                            <h1 className="text-white mb-4">{bookingblock.heading}</h1>
                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: bookingblock.content }} />
                            <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-white mb-4">{bookingblock.form_heading}</h1>
                            <div dangerouslySetInnerHTML={{ __html: formHtml }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingBlock
