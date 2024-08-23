import React from "react";
import iosIcon from "../../public/assets/icons/ios.png";
import androidIcon from "../../public/assets/icons/android.png";
import crossIcon from "../../public/assets/icons/cross.png";
import nativeIcon from "../../public/assets/icons/native_app.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

const WhatWeDoMobile = () => {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do</h2>
        <h5 className="text__text2 fw-">
          You can choose our Comprehensive Mobile Application Development
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={iosIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">iOS Development</h4>
          <small className="text__text1 mt-3">
            Create powerful and user-friendly iOS applications with our expert
            development services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={androidIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Android Development</h4>
          <small className="text__text1 mt-3">
            Build innovative and high-performing Android applications with our
            specialized development services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={crossIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cross-Platform Development</h4>
          <small className="text__text1 mt-3">
            Develop seamless and versatile applications across multiple
            platforms with our cross-platform development expertise.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={nativeIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Native App development</h4>
          <small className="text__text1 mt-3">
            Create robust and efficient native apps designed for optimal
            performance on specific platforms.
          </small>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <p className="text__text1">
            We set a Reminder of your Business in your client's Mobile
          </p>
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
};

export default WhatWeDoMobile;
