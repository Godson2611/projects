import Image from "next/image";
import correctIcon from "../../public/assets/icons/correct.png";
import ContactModal from "@/containers/ContactModal";

export default function HowWeDoBpo() {
  return (
    <>
      <div className="bg__gray my-5 py-5">
        <div className="container-fluid padding py-5">
          <div className="row g-3 text-center text-md-start">
            <h2 className="text__red">How we Do</h2>
            <h5 className="text__text2 fw-medium">
              Efficient Process to break complexities
            </h5>
          </div>
          <div className="row  d-flex align-items-start justify-content-between">
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Deploy the right resources</h4>
                <li className="list-group-item mb-3">
                  <div className="d-flex">
                    <span className="me-2">
                      <Image src={correctIcon} alt="correct" width={17} />
                    </span>
                    <p>Comprehensive understanding of your business strategy</p>
                  </div>
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  We train a team to start delivering
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  working alongside your onsite team
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">Review process to increase</h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Examine the entire process.
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Create an automation strategy to increase efficiency
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  optimize costs
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">
                  Reduce business infrastructure
                </h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  We minimize manual effort
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  improve customer onboarding rates
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  Leverage cognitive automation to automate configuration
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  data validation
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  delivering hyper-relevant customer experiences.
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-4 col-lg-3">
              <ul>
                <h4 className="text__text1 mb-3">
                  Automate business processes
                </h4>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  We Implement automation
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  develop a user-friendly
                </li>
                <li className="list-group-item mb-3">
                  <span className="me-2">
                    <Image src={correctIcon} alt="correct" width={17} />
                  </span>
                  easy-to-operate process
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <p className="text__text1 fw-medium">
                To unlock efficiency and optimized cost endorse your BPO/KPO
                projects
              </p>
              <button
                data-bs-toggle="modal"
                data-bs-target="#contactUs"
                className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
              >
                Reach us
              </button>
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
