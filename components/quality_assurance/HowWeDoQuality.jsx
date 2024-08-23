import Image from "next/image";
import precisionIcon from "../../public/assets/icons/precision.png";
import efficiencyIcon from "../../public/assets/icons/efficiency.png";
import consistencyIcon from "../../public/assets/icons/consistency.png";
import futureReadyIcon from "../../public/assets/icons/future-ready.png";
import ContactModal from "@/containers/ContactModal";

export default function HowWeDoQuality() {
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
              <Image src={precisionIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Precision</h4>
              <small className="text__text1 mt-3">
                We ensure every detail is meticulously tested to meet exacting
                standards, guaranteeing that your product performs flawlessly
                under all conditions.
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={efficiencyIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Efficiency</h4>
              <small className="text__text1 mt-3">
                Our streamlined testing processes are designed to maximize
                productivity and minimize time-to-market without compromising
                quality
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={consistencyIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Consistency</h4>
              <small className="text__text1 mt-3">
                We maintain rigorous testing protocols to ensure uniform quality
                and reliability across every aspect of your product.
              </small>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <Image src={futureReadyIcon} alt="web-logo" width={70} />
              <h4 className="text__text1 mt-3">Future-Ready Solutions</h4>
              <small className="text__text1 mt-3">
                Our testing strategies are designed to ensure scalability and
                adaptability, preparing your product for future demands and
                technological advancements.
              </small>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <p className="text__text1 fw-medium">
                Best World Class QA and Testing Methods
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
