import Slider from 'react-slick';  // Import React Slick
import '../../assets/css/slick/slick.css';
import '../../assets/css/slick/slick-theme.css';

import testimonial_1 from '../../assets/images/testimonial-1.jpg'
import testimonial_2 from '../../assets/images/testimonial-2.jpg'
import testimonial_3 from '../../assets/images/testimonial-3.jpg'
import testimonial_4 from '../../assets/images/testimonial-4.jpg'

function TestimonialBlock() {
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
  return (
    <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <Slider className="testimonial-carousel position-relative" {...settings}>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonial_1} style={{width:'80px', height: '80px'}} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonial_2} style={{width:'80px', height: '80px'}} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonial_3} style={{width:'80px', height: '80px'}} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonial_4} style={{width:'80px', height: '80px'}} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </Slider>
            </div>
        </div>
    </>
  )
}

export default TestimonialBlock
