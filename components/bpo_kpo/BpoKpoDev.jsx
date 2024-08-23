import Image from "next/image";
import bopKpoImage from "../../public/assets/images/bpo_kpo.svg?url";
import scalabilityIcon from "../../public/assets/icons/scalability.png";
import practicalIcon from "../../public/assets/icons/practical.png";
import efficiencyIcon from "../../public/assets/icons/efficiency_icon.png";
import ContactModal from "@/containers/ContactModal";

export default function BpoKpoDev() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            BPO/KPO Services
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Explore next level efficiency in Customer Services
          </h3>
          <p className="fs-5 text__text1">We Simplify your Process</p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={efficiencyIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Efficiency</p>
            </div>
            <div className="col">
              <Image src={scalabilityIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">Scalability</p>
            </div>
            <div className="col">
              <Image src={practicalIcon} alt="creative_icon" width={70} />
              <p className="text__text1 mt-3 weight__500">
                Practical solutions
              </p>
            </div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Reach us
          </button>
          <ContactModal />
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <Image
            className="img-fluid"
            src={bopKpoImage}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
