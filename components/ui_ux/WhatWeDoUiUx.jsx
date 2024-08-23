import Image from "next/image";
import analysisIcon from "../../public/assets/icons/analysis.png";
import usabilityIcon from "../../public/assets/icons/usability.png";
import wireFramingIcon from "../../public/assets/icons/wireFraming.png";
import visualIcon from "../../public/assets/icons/analysis.png";

export default function WhatWeDoUiUx() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do </h2>
        <h5 className="text__text2 fw-">
          You can choose our Comprehensive Mobile Application Development
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={analysisIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">User Research Analysis</h4>
          <small className="text__text1 mt-3">
            Gain actionable insights with our in-depth user research analysis,
            tailored to enhance user experience and drive product success.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={usabilityIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Usability Test</h4>
          <small className="text__text1 mt-3">
            Evaluate and improve user experience with our detailed usability
            testing services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={wireFramingIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Wire Framing and Prototyping</h4>
          <small className="text__text1 mt-3">
            Visualize and refine your ideas with our wireframing and prototyping
            services, creating clear and interactive design concepts.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={visualIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Visual Designs</h4>
          <small className="text__text1 mt-3">
            Crafting Engaging and Responsive Interfaces to Elevate Your User
            Experience
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
