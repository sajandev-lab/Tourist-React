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
                //console.log(formHtml);
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
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label htmlFor="datetime">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select bg-transparent" id="select1">
                                                <option value="1">Destination 1</option>
                                                <option value="2">Destination 2</option>
                                                <option value="3">Destination 3</option>
                                            </select>
                                            <label htmlFor="select1">Destination</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{height: '100px'}}></textarea>
                                            <label htmlFor="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingBlock
