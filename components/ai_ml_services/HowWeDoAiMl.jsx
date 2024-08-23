import Image from "next/image";
import correctIcon from "../../public/assets/icons/correct.png";
import ContactModal from "@/containers/ContactModal";

export default function HowWeDoAiMl() {
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
          <div className="row  d-flex align-items-start justify-content-between">
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Data Annotation Services</h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Meticulous data annotation services
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  High-quality annotations across various data types
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Foundation for robust machine-learning models.
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">
                  Foundation for robust machine-learning models.
                </h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Custom AI modules
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Intelligent Insights
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Solutions to drive efficiency
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  optimize workflows
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  deliver tangible results
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">
                  AI Application & Web Development
                </h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Intelligent Chatbots
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Recommendation engines
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Computer vision capabilities
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Immersive
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Customization
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Tailored AI and ML solutionsx
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <p className="text__text1 fw-medium">
                Discover how effortless AI is
              </p>
              <button
                data-bs-toggle="modal"
                data-bs-target="#contactUs"
                className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
              >
                Discover AI
              </button>
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
