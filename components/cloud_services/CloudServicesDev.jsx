import Image from "next/image";
import cloudImage from "../../public/assets/images/cloud.svg?url";
import transFromIcon from "../../public/assets/icons/transform.png";
import innovateIcon from "../../public/assets/icons/innovate.png";
import optimizeIcon from "../../public/assets/icons/optimize.png";
import ContactModal from "@/containers/ContactModal";

export default function CloudServicesDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Cloud Services
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Driving Reinvention to meet the ever-changing technology
            requirements
          </h3>
          <p className="fs-5 text__text1">We provide cloud services</p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={transFromIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Transform</p>
            </div>
            <div className="col">
              <Image src={innovateIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Innovate</p>
            </div>
            <div className="col">
              <Image src={optimizeIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Optimize</p>
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
            src={cloudImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
