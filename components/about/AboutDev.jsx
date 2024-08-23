import Image from "next/image";
import aboutImage from "../../public/assets/images/about.svg?url";
import ContactModal from "@/containers/ContactModal";

export default function AboutDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-6 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            360°Technology that inspires Future
          </h1>
          <h4 className="text__text2 mb-3 mb-sm-4 lh-base">
            Rediscover the technology at every angle with our Agile Environment
            for Futuristic Growth
          </h4>
          <p className="fs-5 text__text1">Solutions of Tomorrow Built Today</p>
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
        <div className="col-lg-6 text-center text-lg-end">
          <Image
            className="img-fluid"
            src={aboutImage}
            alt="entrepreneur_home_page_image"
          />
        </div>
      </div>
    </div>
  );
}
