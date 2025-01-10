import about_bg from '../../assets/images/about.jpg'

function ServiceBlock({serviceblock}) {
  
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow animated fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">{serviceblock.sub_heading}</h6>
            <h1 className="mb-5">{serviceblock.heading}</h1>
          </div>
          <div className="row g-4">
              {Array.isArray(serviceblock.services_list) && serviceblock.services_list.length > 0 ? (
                  serviceblock.services_list.map((service_item, index) => (
                    <div className="col-lg-3 col-sm-6 wow animated fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                      <div className="service-item rounded pt-3">
                        <div className="p-4">
                          <i className={`fa fa-3x ${service_item.add_icon_text} fa-3x text-primary mb-4`}></i>
                          <h5>{service_item.heading}</h5>
                          <p className="mb-4" dangerouslySetInnerHTML={{ __html: service_item.content }} />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
              )}
          </div>
        </div>
        </div>
    </>
  )
}

export default ServiceBlock
