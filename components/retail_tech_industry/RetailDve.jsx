import Image from "next/image";
import retailIcon from "../../public/assets/images/retail.svg?url";
import ContactModal from "@/containers/ContactModal";

export default function RetailDve() {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Retail Tech Industry
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            The retail industry is growing with the need for tech for efficient
            operations
          </h3>
          <p className="fs-5 text__text1">
            If you want to experience the Innovative Technology in Retail
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
            src={retailIcon}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
}
