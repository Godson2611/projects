import Image from "next/image";
import apiIcon from "../../public/assets/icons/api-testing.png";
import loadingIcon from "../../public/assets/icons/load-testing.png";
import securityIcon from "../../public/assets/icons/security-testing.png";
import qualityIcon from "../../public/assets/icons/quality-audit.png";
import manualIcon from "../../public/assets/icons/manual-testing.png";
import automatedIcon from "../../public/assets/icons/automated-testing.png";
import ContactModal from "@/containers/ContactModal";

export default function WhatWeDoQuality() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do</h2>
        <h5 className="text__text2 fw-">
          You can choose our Comprehensive QA & Testing
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={manualIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Manual Testing</h4>
          <small className="text__text1 mt-3">
            Thoroughly validate your software's functionality and usability with
            our expert manual testing services
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={automatedIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Automated Testing</h4>
          <small className="text__text1 mt-3">
            Streamline your testing process with our efficient and precise
            automated testing solutions.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={apiIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">API Testing</h4>
          <small className="text__text1 mt-3">
            Verify the functionality and reliability of your APIs with our
            thorough and accurate API testing services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={loadingIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Load Testing</h4>
          <small className="text__text1 mt-3">
            Assess your system's performance under stress with our comprehensive
            load testing services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={securityIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Security Testing</h4>
          <small className="text__text1 mt-3">
            Fortify your system against threats with our detailed and proactive
            security testing services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={qualityIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Quality Audit</h4>
          <small className="text__text1 mt-3">
            Evaluate and enhance your standards with our comprehensive quality
            audit services.
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
            Get Quote
          </button>
          <ContactModal />
        </div>
      </div>
    </div>
  );
}
