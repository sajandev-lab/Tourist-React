function PackageBlock({packageblock}) {
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">{packageblock.sub_heading}</h6>
                    <h1 className="mb-5">{packageblock.heading}</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {Array.isArray(packageblock.package_list) && packageblock.package_list.length > 0 ? (
                    packageblock.package_list.map((package_item, index) => {
                        const read_link = package_item.read_more_button;
                        const book_link = package_item.book_now_button;
                        // Retrieve the star count from the ACF select field
                        const rawStarCount = package_item.select_star; // ACF value, e.g., "3"
                        const starCount = parseInt(rawStarCount, 10) || 0; // Fallback to 0 if invalid
                        const totalStars = 5;
                        // Generate stars dynamically
                        const stars = [];
                        for (let i = 0; i < totalStars; i++) {
                            stars.push(
                                <small
                                    className={`fa ${i < starCount ? 'fa-star text-primary' : 'fa-star-o text-muted'}`}
                                    key={`${index}-${i}`}
                                ></small>
                            );
                        }
                        return (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" key={index} data-wow-delay={`${0.1 * (index + 1)}s`}>
                                <div className="package-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={package_item.background_image.url} alt={package_item.background_image.alt} />
                                    </div>
                                    {Array.isArray(package_item.trip_info_bar) && package_item.trip_info_bar.length > 0 ? (
                                         <div className="d-flex border-bottom">
                                            {package_item.trip_info_bar.map((childItem, childIndex) => (
                                                <small key={childIndex} className={`flex-fill text-center py-2 ${childIndex !== package_item.trip_info_bar.length - 1 ? 'border-end' : ''}`}><i className={`fa ${childItem.info_icon_text} text-primary me-2`}></i>{childItem.info_text}</small>
                                                
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No child items found.</p>
                                    )}
                                    <div className="text-center p-4">
                                        {package_item.price ? <h3 className="mb-0">{package_item.price}</h3> : <h3 className="mb-0"></h3>}
                                        <div className="mb-3">
                                            {stars}
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: package_item.content }} />
                                        <div className="d-flex justify-content-center mb-2">
                                        {read_link && read_link.url && (
                                            <a
                                                href={read_link.url}
                                                target={read_link.target || '_self'}
                                                rel={read_link.target === '_blank' ? 'noopener noreferrer' : ''}
                                                className="btn btn-sm btn-primary px-3 border-end"
                                                style={{ borderRadius: '30px 0 0 30px'}}
                                            >
                                                {read_link.title || 'Learn More'}
                                            </a>
                                        )}
                                        {book_link && book_link.url && (
                                            <a
                                                href={book_link.url}
                                                target={book_link.target || '_self'}
                                                rel={book_link.target === '_blank' ? 'noopener noreferrer' : ''}
                                                className="btn btn-sm btn-primary px-3"
                                                style={{ borderRadius: '0 30px 30px 0'}}
                                            >
                                                {book_link.title || 'Learn More'}
                                            </a>
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default PackageBlock
