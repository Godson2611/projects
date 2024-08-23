import Image from "next/image";
import enhancedIcon from "../../public/assets/icons/enhanced_efficiency.png";
import improvedIcon from "../../public/assets/icons/improved.png";
import costIcon from "../../public/assets/icons/cost.png";
import qualityIcon from "../../public/assets/icons/quality.png";
import supplyIcon from "../../public/assets/icons/supply.png";

export default function WhyTechHealthCare() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">Why Tech to Your Healthcare and Pharma</h2>
        <h5 className="text__text2 fw-medium">
          Better and Efficient management of your Hospital, Pharma and Life
          science R&D
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={enhancedIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Enhanced Efficiency</h4>
          <small className="text__text1 mt-3">
            Tech streamlines operations for quicker, more accurate processes.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={improvedIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Improved Patient Care</h4>
          <small className="text__text1 mt-3">
            AI & ML enable precise diagnostics and personalized treatment plans.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={costIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cost Savings</h4>
          <small className="text__text1 mt-3">
            Technology reduces errors, hospital stays, and overall expenses
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={qualityIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Quality Control</h4>
          <small className="text__text1 mt-3">
            Digital transformation ensures regulatory compliance and high
            standards
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={supplyIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Supply Chain Optimization</h4>
          <small className="text__text1 mt-3">
            Blockchain, IoT, and RFID enhance product integrity and automation.
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
