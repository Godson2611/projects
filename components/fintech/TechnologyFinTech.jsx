import Image from "next/image";
import continuousIcon from "../../public/assets/icons/continuous_innovation.png";
import regulatoryIcon from "../../public/assets/icons/regulatory_technology.png";
import cyberSecurityIcon from "../../public/assets/icons/cybersecurity.png";

export default function TechnologyFinTech() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">Technology Challenges in FinTech</h2>
        <h5 className="text__text2 fw-medium">
          Major Technology Challenges Impacting the Fintech Industry
        </h5>
        <small className="text__text2">
          In the world of financial technology, several technological challenges
          pose significant hurdles for FinTech companies
        </small>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={continuousIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Continuous Innovation</h4>
          <small className="text__text1 mt-3">
            Challenge: Staying Ahead of Market Trends
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={regulatoryIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Regulatory Technology</h4>
          <small className="text__text1 mt-3">Data Annotation Services</small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={cyberSecurityIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Content Writing Services</h4>
          <small className="text__text1 mt-3">
            Challenge: Ensuring Regulatory Compliance for establishing a Finance
            company
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
