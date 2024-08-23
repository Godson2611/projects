import Image from "next/image";
import bankingIcon from "../../public/assets/icons/banking.png";
import retailIcon from "../../public/assets/icons/retail.png";
import healthIcon from "../../public/assets/icons/health.png";
import suppplysIcon from "../../public/assets/icons/supplys.png";
import ContactModal from "@/containers/ContactModal";

export default function WhoWeServe() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">Who We Serve</h2>
          <h5 className="text__text2 fw-medium">Industries we Cater</h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={bankingIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Banking and Fintech</h4>
            <small className="text__text1 mt-3">
              Technology for demanding and growing industry, with precision.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={retailIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Retail Tech Industry</h4>
            <small className="text__text1 mt-3">
              Technology that is customer-centric and growth-centric.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={healthIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Health Care & Life Sciences</h4>
            <small className="text__text1 mt-3">
              Technology to streamline the process and efficient movements.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={suppplysIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Supply Chain Management </h4>
            <small className="text__text1 mt-3">
              Technology with the balance of Customer centricity and precision.
            </small>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Drive in more clients with our Industry Specific approach
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Contact US
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
    </div>
  );
}
