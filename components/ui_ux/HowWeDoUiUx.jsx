import Image from "next/image";
import correctIcon from "../../public/assets/icons/correct.png";
import ContactModal from "@/containers/ContactModal";

export default function HowWeDoUiUx() {
  return (
    <>
      <div className="bg__gray my-5 py-5">
        <div className="container-fluid padding py-5">
          <div className="row g-3 text-center text-md-start">
            <h2 className="text__red">How we Do</h2>
            <h5 className="text__text2 fw-medium">
              Structured Process with Clear Transparency
            </h5>
          </div>
          <div className="row  d-flex align-items-center justify-content-center ">
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Discover</h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  User Research
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  User Persona
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  User Story
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Define</h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Site Mapping
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Empathy mapping
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  User journey mapping
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Delivery</h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Paper Prototyping
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Invision mockups
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  High Fidelity Mockups
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <p className="text__text1 fw-medium">
                Creative Design Solutions with Human psychology
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
    </>
  );
}
