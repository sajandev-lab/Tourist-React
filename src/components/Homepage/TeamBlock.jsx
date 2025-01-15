

import React, { useState, useEffect } from 'react';

import team_1 from '../../assets/images/team-1.jpg'
import team_2 from '../../assets/images/team-2.jpg'
import team_3 from '../../assets/images/team-3.jpg'
import team_4 from '../../assets/images/team-4.jpg'

function TeamBlock({teamblock}) {
    const showContent = teamblock.show_team_list;
    //console.log(showContent);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Replace with your WordPress site URL and custom post type endpoint
    fetch('https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/meet_the_team?_embed')
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
    //console.log(posts);
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                    {teamblock.sub_heading}
                    </h6>
                    <h1 className="mb-5">{teamblock.heading}</h1>
                </div>
                {showContent ? (
                    <div className="row g-4">
                    {posts.length > 0 ? (
                        posts.map((post) => {
                            return (
                                <div className="col-lg-3 col-md-6 wow fadeInUp" key={post.id} data-wow-delay="0.1s">
                                    <div className="team-item">
                                        <div className="overflow-hidden">
                                            {post._embedded && post._embedded["wp:featuredmedia"] ? (
                                                
                                                <img
                                                    src={post._embedded["wp:featuredmedia"][0].source_url}
                                                    alt={post._embedded["wp:featuredmedia"][0].alt_text || "Featured Image"}
                                                    style={{ maxWidth: "100%" }}
                                                />
                                            ) : (
                                                <p>No featured image available</p>
                                            )}
                                        </div>
                                        <div
                                        className="position-relative d-flex justify-content-center"
                                        style={{ marginTop: '-19px' }}
                                        >
                                        <a className="btn btn-square mx-1" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="btn btn-square mx-1" href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="btn btn-square mx-1" href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        </div>
                                        <div className="text-center p-4">
                                        <h5 className="mb-0">{post.title.rendered}</h5>
                                        <small>Designation</small>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center">No posts found.</p>
                    )}
                    </div>
                ) : (
                    <p className="text-center">Not Showing Team</p>
                )}
            </div>
        </div>
    </>
  )
}

export default TeamBlock
