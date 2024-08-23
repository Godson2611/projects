import Image from "next/image";
import fintechImage from "../../public/assets/images/fintech.svg?url";
import complyIcon from "../../public/assets/icons/comply.png";
import practicalIcon from "../../public/assets/icons/practical_solutions.png";
import createIcon from "../../public/assets/icons/create_unique.png";
import ContactModal from "@/containers/ContactModal";

export default function FintechDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Banking and Fintech Services
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Banking is essential, and so is the tech behind it.
          </h3>
          <p className="fs-5 text__text1">
            Banking is essential, and so is the tech behind it.
          </p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={createIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">
                Create a unique value proposition
              </p>
            </div>
            <div className="col">
              <Image src={practicalIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">
                Practical solutions
              </p>
            </div>
            <div className="col">
              <Image src={complyIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">
                Comply with regulations
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
          <Image
            className="img-fluid"
            src={fintechImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
