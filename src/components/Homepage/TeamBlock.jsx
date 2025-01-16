

import React, { useState, useEffect } from 'react';

function TeamBlock({teamblock}) {
    const showContent = teamblock.show_team_list;
    //console.log(showContent);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Replace with your WordPress site URL and custom post type endpoint
    fetch('https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/meet_the_team')
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
                        posts.map((post, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 wow fadeInUp" key={post.id} data-wow-delay={`${0.1 * (index + 1)}s`}>
                                    <div className="team-item">
                                        <div className="overflow-hidden">
                                        {post.featured_image_url ? (
                                            <img className='img-fluid' src={post.featured_image_url} alt={post.title.rendered} />
                                        ) : (
                                            <p>No featured image</p>
                                        )}
                                        </div>
                                        {post.acf && post.acf.social_icons && (
                                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }} >
                                                {post.acf.social_icons.map((item, index) => (
                                                    <a key={index} className="btn btn-square mx-1" href={item.url}>
                                                        <i className={`fab ${item.add_icon_text}`}></i>
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        <div className="text-center p-4">
                                            <h5 className="mb-0">{post.title.rendered}</h5>
                                            <small>{post.acf && post.acf.add_designation}</small>
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
