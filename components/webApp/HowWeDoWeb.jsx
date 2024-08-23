import agileIcon from "../../public/assets/images/agile.png";
import timeIcon from "../../public/assets/images/time.png";
import scheduledIcon from "../../public/assets/images/scheduled.png";
import futuristicIcon from "../../public/assets/images/futuristic.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

export default function HowWeDoWeb() {
  return (
    <>
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
              <Image src={agileIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Agile Development</h4>
              <small className="text__text1 mt-3">
                Adopting Agile Development for Flexible and Iterative Progress.
                Quickly adapt to changes and deliver high-quality solutions with
                continuous feedback and collaboration.
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={timeIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Time assurance</h4>
              <small className="text__text1 mt-3">
                Commit to Timely Delivery with Our Proven Time Assurance
                Strategies. We prioritize your deadlines and ensure your project
                is completed on schedule without compromising quality.
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={scheduledIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Scheduled update</h4>
              <small className="text__text1 mt-3">
                Receive Scheduled, Transparent Updates Throughout Your Project.
                Stay informed with regular progress reports and clear
                communication every step of the way.
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={futuristicIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">
                Futuristic scalable solutions
              </h4>
              <small className="text__text1 mt-3">
                Delivering Futuristic, Scalable Solutions Designed to Grow with
                Your Business. Our innovations ensure your technology adapts
                seamlessly to future needs and opportunities.
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
    </>
  );
}
