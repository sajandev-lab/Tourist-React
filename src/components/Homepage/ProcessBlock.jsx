
function ProcessBlock({processblock}) {
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">{processblock.sub_heading}</h6>
                    <h1 className="mb-5">{processblock.heading}</h1>
                </div>
                {processblock.process_list && processblock.process_list.length > 0 ? (
                       <div className="row gy-5 gx-4 justify-content-center">
                          {processblock.process_list.map((process_item, index) => (
                              <div key={index} className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style= {{width:'100px', height: '100px'}}>
                                        <i className={`fa ${process_item.add_icon_text} fa-3x text-white`}></i>
                                    </div>
                                    <h5 className="mt-4">{process_item.heading}</h5>
                                    <hr className="w-25 mx-auto bg-primary mb-1" />
                                    <hr className="w-50 mx-auto bg-primary mt-0" />
                                    <div className="mb-0" dangerouslySetInnerHTML={{ __html: process_item.content }} />
                                </div>
                            </div>
                          ))}
                      </div>
                  ) : (
                      <p>No repeater data available.</p>
                  )}
            </div>
        </div>
    </>
  )
}

export default ProcessBlock
