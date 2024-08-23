import Image from "next/image";
import healthCareImage from "../../public/assets/images/health_care.svg?url";
import ContactModal from "@/containers/ContactModal";

export default function HealthCareDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Health Care and Life Sciences
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Technology for innovative futuristic Health care and Life sciences
          </h3>
          <p className="fs-5 text__text1">
            Want to experience futuristic Health and Life science Tech
          </p>
          <br />
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
            src={healthCareImage}
            alt="entrepreneur_home_page_image"
          />
        </div>
      </div>
    </div>
  );
}
