import Image from "next/image";
import coustomerIcon from "../../public/assets/icons/customer_approach.png";
import embraceIcon from "../../public/assets/icons/embrace.png";
import partnerIcon from "../../public/assets/icons/partner.png";
import continuousIcon from "../../public/assets/icons/continuous.png";
import scalableIcon from "../../public/assets/icons/scalable.png";

export default function RetailMix() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center text-md-start">
        <h4 className="text__text1 my-4">
          The Mix of the right strategy and Technology is the key to success in
          the Retail industry.
        </h4>
      </div>
      <div className="row  d-flex align-items-center flex-wrap text-center mt-3">
        <div className="col d-flex flex-column align-items-center">
          <Image src={coustomerIcon} alt="web-logo" width={70} />
          <small className="text__text1 mt-3 text-center">
            Develop a Customer- Centric Approach
          </small>
          <br />
        </div>
        <div className="col d-flex flex-column align-items-center">
          <Image src={embraceIcon} alt="web-logo" width={70} />
          <small className="text__text1 mt-3">
            Embrace Technology that Fits Your Value Proposition
          </small>
          <br />
        </div>
        <div className="col d-flex flex-column align-items-center">
          <Image src={partnerIcon} alt="web-logo" width={70} />
          <small className="text__text1 mt-3 text-center">
            Collaborate and Partner
          </small>
          <br />
        </div>
        <div className="col d-flex flex-column align-items-center">
          <Image src={continuousIcon} alt="web-logo" width={70} />
          <small className="text__text1 mt-3 text-center">
            Continuous Innovation
          </small>
          <br />
        </div>
        <div className="col d-flex flex-column align-items-center">
          <Image src={scalableIcon} alt="web-logo" width={70} />
          <small className="text__text1 mt-3 text-center">
            Scalability and Flexibility
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
