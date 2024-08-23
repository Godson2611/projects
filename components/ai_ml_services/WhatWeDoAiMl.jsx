import Image from "next/image";
import dataAnnotationIcon from "../../public/assets/icons/data_annotation.png";
import aiModuleIcon from "../../public/assets/icons/ai_module.png";
import aiApplicationIcon from "../../public/assets/icons/ai_application.png";
import ContactModal from "@/containers/ContactModal";

export default function WhatWeDoAiMl() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do </h2>
        <h5 className="text__text2 fw-">
          Transforming Data into Intelligent Solutions with AI & ML
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={dataAnnotationIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Data Annotation Services</h4>
          <small className="text__text1 mt-3">
            Ensure high-quality, accurately labeled data with our expert data
            annotation services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={aiModuleIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">AI Module Development</h4>
          <small className="text__text1 mt-3">
            Develop advanced AI modules tailored to your business needs,
            enhancing functionality and performance.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={aiApplicationIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">AI Application & Web Development</h4>
          <small className="text__text1 mt-3">
            Create innovative AI-driven applications and websites to elevate
            user experiences and streamline operations.
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
            Get quotation
          </button>
          <ContactModal />
        </div>
      </div>
    </div>
  );
}
