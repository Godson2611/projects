import Image from "next/image";
import arrowIcon from "../../public/assets/icons/arrow_click.png";
import inStoreIcon from "../../public/assets/icons/in_store.png";
import realTimeIcon from "../../public/assets/icons/real_time.png";
import customerIcon from "../../public/assets/icons/customer_shopping.png";
import socialIcon from "../../public/assets/icons/social.png";
import demoandIcon from "../../public/assets/icons/demoand.png";
import robotsIcon from "../../public/assets/icons/robots.png";
import ContactModal from "@/containers/ContactModal";

export default function WhatYouGetRetail() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row text-center text-md-start g-3 my-5">
          <h2 className="text__text1 fw-semibold">
            What you Get with FF Retail Tech
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={arrowIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">Click & Collect</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={inStoreIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">
                  In-store & In-app AR Shopping Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={realTimeIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">Real-time Recommendations</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={customerIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">Customer-Centered Shopping</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={socialIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">Social Commerce</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={demoandIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">
                  Demand Forecasting using Machine Learning
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="d-flex align-items-center p-3">
                <Image src={robotsIcon} alt="click_icon" />
                <p className="fw-semibold ms-3">Robots as Assistants</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              If you want to experience the Innovative Technology in Retail
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Reach us
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
