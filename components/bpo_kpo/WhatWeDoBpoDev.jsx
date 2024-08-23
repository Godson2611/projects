import Image from "next/image";
import customerIcon from "../../public/assets/icons/customer_support.png";
import annotationIcon from "../../public/assets/icons/data_annotations.png";
import contentIcon from "../../public/assets/icons/content_writing.png";
import blackIcon from "../../public/assets/icons/back_office.png";
import technicalIcon from "../../public/assets/icons/technical_support.png";
import telemarketingIcon from "../../public/assets/icons/telemarketing.png";
import ContactModal from "@/containers/ContactModal";

export default function WhatWeDoBpoDev() {
  return (
    <div className="container-fluid padding py-5">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do </h2>
        <h5 className="text__text2 fw-">We undertake these project</h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={customerIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">
            Customer Support and Telemarketing
          </h4>
          <small className="text__text1 mt-3">
            Customer Support and Telemarketing
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={annotationIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Data Annotation Services</h4>
          <small className="text__text1 mt-3">Data Annotation Services</small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={contentIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Content Writing Services</h4>
          <small className="text__text1 mt-3">
            Crafting compelling and engaging content tailored to your brand's
            voice and audience.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={blackIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Back Office Support</h4>
          <small className="text__text1 mt-3">
            Streamlining operations with precise and dependable back office
            support services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={telemarketingIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Telemarketing</h4>
          <small className="text__text1 mt-3">
            Driving sales and customer engagement with effective telemarketing
            solutions
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={technicalIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Technical Support</h4>
          <small className="text__text1 mt-3">
            Resolving technical issues swiftly and efficiently with expert tech
            support services.
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
            Endorse your Project
          </button>
          <ContactModal />
        </div>
      </div>
    </div>
  );
}
