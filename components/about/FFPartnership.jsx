import Image from "next/image";
import mvpIcon from "../../public/assets/icons/mvp.png";
import insightfulIcon from "../../public/assets/icons/insightful.png";
import designIcon from "../../public/assets/icons/design.png";
import data_migrationIcon from "../../public/assets/icons/data_migration.png";
import enterprise_levelIcon from "../../public/assets/icons/enterprise_level.png";
import web_appIcon from "../../public/assets/icons/web_app.png";
import new_genIcon from "../../public/assets/icons/new_gen.png";
import ai_ml_solutionIcon from "../../public/assets/icons/ai_ml_solution.png";
import ContactModal from "@/containers/ContactModal";

export default function FFPartnership() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center text-md-start g-3 my-5">
        <h2 className="text__text1 fw-semibold">First Floor Partnership</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={mvpIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">MVP Launches</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={insightfulIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">Insightful Product Discovery</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={designIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">Design Genius</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={data_migrationIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">Data Migration</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={enterprise_levelIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">Enterprise level solutions</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={web_appIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">Web App Development</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={new_genIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">New Gen Mobile App</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <div className="d-flex align-items-center p-3">
              <Image src={ai_ml_solutionIcon} alt="click_icon" />
              <p className="fw-semibold ms-3">AI/ML solution</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
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
  );
}
