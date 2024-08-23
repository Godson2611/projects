import Image from "next/image";
import flexIcon from "../../public/assets/icons/flexible.png";
import saasIcon from "../../public/assets/icons/saas_paas_laas.png";
import effortIcon from "../../public/assets/icons/effortless.png";
import specialIcon from "../../public/assets/icons/specialization.png";
import cloudIcon from "../../public/assets/icons/clou_app_dev.png";
import ContactModal from "@/containers/ContactModal";

export default function OurExpertiseCloud() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">Our Expertise</h2>
          <h5 className="text__text2 fw-medium">
            Structured Process with Clear Transparency
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={flexIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Flexible Scalable Resources</h4>
            <small className="text__text1 mt-3">
              We provide flexible and scalable cloud resources tailored to your
              business needs, ensuring optimal performance and cost-efficiency.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={saasIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">SaaS, PaaS, or IaaS Models</h4>
            <small className="text__text1 mt-3">
              Our expertise spans across SaaS, PaaS, and IaaS models, offering
              you the right solution for your unique requirements.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={effortIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Effortless Migration</h4>
            <small className="text__text1 mt-3">
              We ensure a smooth and seamless migration to the cloud, minimizing
              downtime and disruption to your operations.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={specialIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Specialization in Cloud Architecture
            </h4>
            <small className="text__text1 mt-3">
              Our testing strategies are designed to ensure scalability and
              adaptability, preparing your product for future demands and
              technological advancements.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={cloudIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Cloud App Development</h4>
            <small className="text__text1 mt-3">
              We develop cutting-edge cloud applications that enhance your
              business capabilities and drive innovation
            </small>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Re-invent your Business with Cloud
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
}
