import Image from "next/image";
import ideationIcon from "../../public/assets/icons/ideation_digital.png";
import ui_ux_designIcon from "../../public/assets/icons/ui_ux_design.png";
import developmentIcon from "../../public/assets/icons/development.png";
import qualitysIcon from "../../public/assets/icons/qualitys.png";
import deliveryIcon from "../../public/assets/icons/delivery.png";
import maintenanceIcon from "../../public/assets/icons/maintenance.png";
import ContactModal from "@/containers/ContactModal";

export default function HowWeHelpAbout() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">How We Help You</h2>
        <h5 className="text__text2 fw-medium">
          Our service flow is crystal clear! You are Guided at each curve to
          look forward!
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={ideationIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Ideation to Digital Strategy</h4>
          <small className="text__text1 mt-3">
            Ideation session with our team to understand your Idea. Strategy for
            its transformation to technology.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={ui_ux_designIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">UI/UX Design</h4>
          <small className="text__text1 mt-3">
            Wireframing and converting your ideas to Designs.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={developmentIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Development</h4>
          <small className="text__text1 mt-3">
            Designs to Development with the futuristic technology that helps you
            scale.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={qualitysIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Quality Assurance</h4>
          <small className="text__text1 mt-3">
            The Development is tested and Quality Assured for its best
            Performance.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={deliveryIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Delivery</h4>
          <small className="text__text1 mt-3">
            We deliver with free hands-on sessions.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={maintenanceIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Maintenance</h4>
          <small className="text__text1 mt-3">
            We maintain your Software and help with back-office work too.
          </small>
          <br />
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Book Consultation
          </button>
          <ContactModal />
        </div>
      </div>
    </div>
  );
}
