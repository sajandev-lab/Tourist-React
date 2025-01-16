import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';  // Import React Slick
import '../../assets/css/slick/slick.css';
import '../../assets/css/slick/slick-theme.css';

import testimonial_1 from '../../assets/images/testimonial-1.jpg'
import testimonial_2 from '../../assets/images/testimonial-2.jpg'
import testimonial_3 from '../../assets/images/testimonial-3.jpg'
import testimonial_4 from '../../assets/images/testimonial-4.jpg'

function TestimonialBlock({testimonialblock}) {
    const settings = {
        dots: true,              // Show navigation dots
        infinite: true,          // Loop the slider
        speed: 500,              // Transition speed
        slidesToShow: 3,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at once
        centerMode: true,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 2000,     // Autoplay speed
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,   // Show 2 slides on medium screens
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,   // Show 1 slide on small screens
              slidesToScroll: 1,
            },
          },
        ],
    };

    const showContent = testimonialblock.show_testimonial_list;
    //console.log(showContent);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Replace with your WordPress site URL and custom post type endpoint
    fetch('https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/testimonial')
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    console.log(posts);
  return (
    <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">{testimonialblock.sub_heading}</h6>
                    <h1 className="mb-5">{testimonialblock.heading}</h1>
                </div>
                {showContent ? (
                  <Slider className="testimonial-carousel position-relative" {...settings}>
                    {posts.length > 0 ? (
                        posts.map((post, index) => {
                            return (
                              <div className="testimonial-item bg-white text-center border p-4" key={index}>
                                {post.featured_image_url ? (
                                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={post.featured_image_url} alt={post.title.rendered} style={{width:'80px', height: '80px'}} />
                                  ) : (
                                      <p>No featured image</p>
                                )}
                                <h5 className="mb-0">{post.title.rendered}</h5>
                                <p>{post.acf && post.acf.city_name}</p>
                                <p className="mb-0" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                              </div>
                            );
                        })
                    ) : (
                        <p className="text-center">No posts found.</p>
                    )}
                </Slider>
                ) : (
                  <p className="text-center">Not Showing Testimonial</p>
                )}
            </div>
        </div>
    </>
  )
}

export default TestimonialBlock
