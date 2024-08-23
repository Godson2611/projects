import Image from "next/image";
import qualityImage from "../../public/assets/images/quality.svg?url";
import reliableIcon from "../../public/assets/icons/reliable.png";
import secured from "../../public/assets/icons/secured.png";
import highperformingIcon from "../../public/assets/icons/high-performing.png";
import ContactModal from "@/containers/ContactModal";

export default function QualityAssuranceDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Quality Assurance & Testing
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Create Superior Product and Services with Best Quality Assurance
            Services
          </h3>
          <p className="fs-5 text__text1">Get Your Software and Applications</p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={reliableIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Reliable</p>
            </div>
            <div className="col">
              <Image src={secured} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Secured</p>
            </div>
            <div className="col">
              <Image src={highperformingIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">High-Performing</p>
            </div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Quality Assured
          </button>
          <ContactModal />
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <Image
            className="img-fluid"
            src={qualityImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
