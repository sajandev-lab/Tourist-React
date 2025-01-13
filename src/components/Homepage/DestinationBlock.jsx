function DestinationBlock({destinationblock}) {
  return (
    <>
        <div className="container-xxl py-5 destination">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">{destinationblock.sub_heading}</h6>
                <h1 className="mb-5">{destinationblock.heading}</h1>
                </div>
                <div className="row g-3">
                    {/* Left Column */}
                    <div className="col-lg-7 col-md-6">
                        <div className="row g-3">
                        {Array.isArray(destinationblock.destination_list) &&
                        destinationblock.destination_list.length > 0 ? (
                            destinationblock.destination_list.map((item, index) => {
                            const isLastItem =
                                index === destinationblock.destination_list.length - 1;

                            // Skip rendering the last item here
                            if (isLastItem) return null;

                            const columnClass =
                                index === 0
                                ? 'col-lg-12 col-md-12'
                                : 'col-lg-6 col-md-12';

                            return (
                                <div
                                className={`${columnClass} wow zoomIn`}
                                data-wow-delay={`${0.1 + index * 0.2}s`}
                                key={index}
                                >
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img
                                    className="img-fluid"
                                    src={item.image.url}
                                    alt={item.image.alt}
                                    />
                                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                    {item.offer_text}
                                    </div>
                                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                    {item.country_text}
                                    </div>
                                </a>
                                </div>
                            );
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                    </div>

                    {/* Right Column (Last Item) */}
                    <div
                        className="col-lg-5 col-md-6 wow zoomIn"
                        data-wow-delay="0.7s"
                        style={{ minHeight: '350px' }}
                    >
                        {Array.isArray(destinationblock.destination_list) &&
                        destinationblock.destination_list.length > 0 ? (
                        <a
                            className="position-relative d-block h-100 overflow-hidden"
                            href=""
                        >
                            <img
                            className="img-fluid position-absolute w-100 h-100"
                            src={
                                destinationblock.destination_list[
                                destinationblock.destination_list.length - 1
                                ].image.url
                            }
                            alt={
                                destinationblock.destination_list[
                                destinationblock.destination_list.length - 1
                                ].image.alt
                            }
                            style={{ objectFit: 'cover' }}
                            />
                            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                            {
                                destinationblock.destination_list[
                                destinationblock.destination_list.length - 1
                                ].offer_text
                            }
                            </div>
                            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                            {
                                destinationblock.destination_list[
                                destinationblock.destination_list.length - 1
                                ].country_text
                            }
                            </div>
                        </a>
                        ) : null}
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default DestinationBlock
