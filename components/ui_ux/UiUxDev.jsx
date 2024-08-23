import UiUxImage from "../../public/assets/images/ui_ux_photo.svg?url";
import uniqueIcon from "../../public/assets/icons/unique.png";
import researchIcon from "../../public/assets/icons/researched.png";
import compellingIcon from "../../public/assets/icons/compelling.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

export default function UiUxDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            UI/UX Services
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Visualizing Your User Point of View with Creative Solutions
          </h3>
          <p className="fs-5 text__text1">
            Not the usual Designs Our Designs are
          </p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={uniqueIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Unique</p>
            </div>
            <div className="col">
              <Image src={researchIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Researched</p>
            </div>
            <div className="col">
              <Image src={compellingIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Compelling</p>
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
            src={UiUxImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
