import Image from "next/image";
import afinueLogo from "../../public/assets/images/afinue.svg?url";
import happy_creditLogo from "../../public/assets/images/happy_credit.svg?url";
import ContactModal from "@/containers/ContactModal";

export default function FFSuccessfullProjects() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row text-center text-md-start g-3 my-5">
          <h2 className="text__text1">First Floor Successful projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4 mb-md-0">
            <div className="card p-4 h-100">
              <Image src={afinueLogo} alt="afinue_log" className="img-fluid" />
              <p className="text__text1 mt-3">
                Website and Admin Portal for Upcide, an Alternative Investment
                Platform
              </p>
              <h5 className="text__text1 mb-4">Tech Stack</h5>
              <ul>
                <li className="mb-3 text__text1">Admin Panel: React</li>
                <li className="mb-3 text__text1">User Panel: Next.js</li>
                <li className="mb-3 text__text1">Backend: Node.js</li>
              </ul>
            </div>
          </div>
          <div className="col mb-4 mb-md-0">
            <div className="card p-4 h-100">
              <Image
                src={happy_creditLogo}
                alt="afinue_log"
                className="img-fluid"
              />
              <p className="text__text1 mt-3">
                Mobile App Development for a Cash-Back Platform
              </p>
              <h5 className="text__text1 mb-4">Tech Stack</h5>
              <ul>
                <li className="mb-3 text__text1">Frontend: React Native</li>
                <li className="mb-3 text__text1">Backend: Node.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Get your Fintech solutions developed
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Get Quote
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
