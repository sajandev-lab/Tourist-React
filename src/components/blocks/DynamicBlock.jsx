import React from 'react';
import BannerBlock from "../Homepage/BannerBlock";
import AboutBlock from "../Homepage/AboutBlock";
import ServiceBlock from "../Homepage/ServiceBlock";
import DestinationBlock from "../Homepage/DestinationBlock";
import PackageBlock from "../Homepage/PackageBlock";
import BookingBlock from "../Homepage/BookingBlock";
import ProcessBlock from "../Homepage/ProcessBlock";
import TeamBlock from "../Homepage/TeamBlock";
import TestimonialBlock from "../Homepage/TestimonialBlock";

function DynamicBlock({ block }) {
  const renderBlock = (contentBlock) => {
    switch (contentBlock.acf_fc_layout) {
      case "banner_block":
        return <BannerBlock bannerblock={contentBlock} />;
      case "about_block":
        return <AboutBlock aboutblock={contentBlock} />;
      case "our_services":
        return <ServiceBlock serviceblock={contentBlock} />;
      case "destination_block":
        return <DestinationBlock destinationblock={contentBlock} />;
      case "package_block":
        return <PackageBlock packageblock={contentBlock} />;
      case "booking_block":
        return <BookingBlock bookingblock={contentBlock} />;
      case "process_block":
        return <ProcessBlock processblock={contentBlock} />;
      case "team_block":
        return <TeamBlock teamblock={contentBlock} />;
      case "testimonial_block":
        return <TestimonialBlock testimonialblock={contentBlock} />;
      default:
        return null;
    }
  };

  return (
    <>
      {block.add_section.map((contentBlock, index) => (
        <React.Fragment key={index}>
          {renderBlock(contentBlock)}
        </React.Fragment>
      ))}
    </>
  );
}

export default DynamicBlock;