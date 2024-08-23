import Image from "next/image";
import aimlImage from "../../public/assets/images/ai_ml_dev.svg?url";
import optimizeIcons from "../../public/assets/icons/optimize_ai.png";
import innovateIcons from "../../public/assets/icons/innovate_ai.png";
import elevateIcon from "../../public/assets/icons/elevate.png";
import ContactModal from "@/containers/ContactModal";

export default function AiMlServicesDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            AI/ML Services
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Efficient automated systems for amplified Business Intelligence
          </h3>
          <p className="fs-5 text__text1">
            Efficient automated systems for amplified Business Intelligence
          </p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={innovateIcons} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Innovate</p>
            </div>
            <div className="col">
              <Image src={optimizeIcons} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Optimize</p>
            </div>
            <div className="col">
              <Image src={elevateIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Elevate</p>
            </div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Contact US
          </button>
          <ContactModal />
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <Image
            className="img-fluid"
            src={aimlImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
