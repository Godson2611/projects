import frontendIcon from "../../public/assets/images/frontend.png";
import backendIcon from "../../public/assets/images/backend.png";
import webAppMaintanceIcon from "../../public/assets/images/web_app_maintance.png";
import crossPlatformImage from "../../public/assets/images/cross_platform.png";
import thirdPartyImage from "../../public/assets/images/third_party.png";
import qualityAssurance from "../../public/assets/images/quality_assurance.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

export default function WhatWeDoWeb() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do </h2>
        <h5 className="text__text2 fw-">
          You can choose our Comprehensive Web Application Development
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={frontendIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Front-end Development</h4>
          <small className="text__text1 mt-3">
            Crafting Engaging and Responsive Interfaces to Elevate Your User
            Experience
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={backendIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Back End Development</h4>
          <small className="text__text1 mt-3">
            Powering Your Applications with Robust and Efficient Back-End
            Development Solutions.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={webAppMaintanceIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Web App Maintenance</h4>
          <small className="text__text1 mt-3">
            Ensuring Your Web Apps Run Smoothly with Reliable and Efficient
            Maintenance Services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={crossPlatformImage} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cross-Platform App Development</h4>
          <small className="text__text1 mt-3">
            Building Seamless Cross-Platform Apps to Reach Your Audience
            Anywhere, Anytime.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={thirdPartyImage} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Third-Party Integration</h4>
          <small className="text__text1 mt-3">
            Streamline Your Workflow with Seamless Third-Party Integration
            Solutions.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={qualityAssurance} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Quality Assurance</h4>
          <small className="text__text1 mt-3">
            Delivering Top-Notch Quality Assurance to Ensure Your Software Meets
            the Highest Standards.
          </small>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Request Quote
          </button>
          <ContactModal />
        </div>
      </div>
    </div>
  );
}
