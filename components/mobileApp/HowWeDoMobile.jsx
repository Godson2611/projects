import React from "react";
import ideationIcon from "../../public/assets/icons/ideation.png";
import uiuxIcon from "../../public/assets/icons/ui_ux_mobile.png";
import devIcon from "../../public/assets/icons/dev_mobile.png";
import qualityIcon from "../../public/assets/icons/quality_mobile.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

const HowWeDoMobile = () => {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">How we Do</h2>
          <h5 className="text__text2 fw-medium">
            Structured Process with Clear Transparency
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={ideationIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Ideation to Digital Strategy</h4>
            <small className="text__text1 mt-3">
              From ideation to digital strategy, we turn your vision into
              actionable, impactful solutions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={uiuxIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">UI/UX Design</h4>
            <small className="text__text1 mt-3">
              Design intuitive and engaging user experiences with our expert
              UI/UX design services.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={devIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Development </h4>
            <small className="text__text1 mt-3">
              Receive timely and detailed progress reports with our scheduled
              update services.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={qualityIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Quality Assurance and Delivery</h4>
            <small className="text__text1 mt-3">
              Ensure excellence and timely delivery with our comprehensive
              quality assurance and delivery services.
            </small>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Best Web App Development Services
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Contact US
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoMobile;
