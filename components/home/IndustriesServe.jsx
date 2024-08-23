import rightArrow from "../../public/assets/icons/right_arrow.png";
import bankingIcon from "../../public/assets/icons/banking_fintech.png";
import retailIcon from "../../public/assets/icons/retail_tech.png";
import healthIcon from "../../public/assets/icons/health_care.png";
import supplyIcon from "../../public/assets/icons/supply_chain.png";
import Image from "next/image";

export default function IndustriesServe() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">Industries We Serve</h2>
          <h5 className="text__text2 fw-medium">
            Expert Solutions Tailored to Your Industry’s Unique Needs
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={bankingIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Web App Development</h4>
            <small className="text__text1 mt-3">
              Unlock the full potential of your business with our custom web app
              development, delivering robust and user-friendly solutions.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Know more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={retailIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Retail Tech Industry</h4>
            <small className="text__text1 mt-3">
              Technology that is customer-centric and growth-centric.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Know more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={healthIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Health Care & Life Sciences</h4>
            <small className="text__text1 mt-3">
              Technology to streamline the process and efficient movements.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Know more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={supplyIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Supply Chain Management </h4>
            <small className="text__text1 mt-3">
              Technology with the balance of Customer centricity and precision.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Know more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
