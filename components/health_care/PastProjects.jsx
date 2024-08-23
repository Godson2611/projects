import Image from "next/image";
import jiviniIcon from "../../public/assets/icons/jivini.png";
import ranchpalIcon from "../../public/assets/icons/ranchpal.png";
import shardaIcon from "../../public/assets/icons/sharda.png";
import panaceaIcon from "../../public/assets/icons/panacea.png";
import ContactModal from "@/containers/ContactModal";

export default function PastProjects() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row text-center text-md-start g-3 my-5">
          <h2 className="text__text1">Past Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          <div className="col mb-5">
            <div className="card border-0 bg-transparent">
              <Image src={jiviniIcon} alt="jivini_logo" />
              <h5 className="card-title text__text1 mt-4 lh-base">
                Streamlining Pharma Process Chain Management
              </h5>
              <p className="card-text text__text2 lh-base ">
                Collaboration with Jeevni led to a comprehensive solution with
                five portals.
              </p>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card border-0 bg-transparent">
              <Image src={ranchpalIcon} alt="jivini_logo" />
              <h5 className="card-title text__text1 mt-4 lh-base">
                IoT-Based AI & ML Cow Health Monitoring
              </h5>
              <p className="card-text text__text2 lh-base ">
                Collaboration with Jeevni led to a comprehensive solution with
                five portals.
              </p>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card border-0 bg-transparent">
              <Image src={shardaIcon} alt="jivini_logo" />
              <h5 className="card-title text__text1 mt-4 lh-base">
                Patient Management & CRM/ ERP
              </h5>
              <p className="card-text text__text2 lh-base ">
                First Floor developed a tailored solution for Sharda Health
                Care, featuring
              </p>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card border-0 bg-transparent">
              <Image src={panaceaIcon} alt="jivini_logo" />
              <h5 className="card-title text__text1 mt-4 lh-base">
                Advanced Healthcare Management
              </h5>
              <p className="card-text text__text2 lh-base ">
                First Floor's collaboration with Panacea Hospital resulted in
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Want to leverage Healthcare and Pharma
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
      <hr className="hr" />
    </>
  );
}
