import webImage from "../../public/assets/images/web_image.svg?url";
import creative from "../../public/assets/icons/creative.png";
import conversative from "../../public/assets/icons/conversative.png";
import converting from "../../public/assets/icons/converting.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

export default function WebAppDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Web App Development
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Simple to Complex, Interactive Software Applications with
            Scalability
          </h3>
          <p className="fs-5 text__text1">
            We blend the perfect balance of your idea, UI, and Technology to
            develop
          </p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={creative} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Creative</p>
            </div>
            <div className="col">
              <Image src={conversative} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Conversative</p>
            </div>
            <div className="col">
              <Image src={converting} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">
                Converting Web Apps
              </p>
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
          <Image className="img-fluid" src={webImage} alt="web_page_image" />
        </div>
      </div>
    </div>
  );
}
