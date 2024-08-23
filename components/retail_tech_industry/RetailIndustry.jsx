import Image from "next/image";
import integrationIcon from "../../public/assets/icons/integration.png";
import cyberIcon from "../../public/assets/icons/cybersecuritys.png";
import scalaIcon from "../../public/assets/icons/scalabilitys.png";
import legacyIcon from "../../public/assets/icons/legacy.png";
import dataIcon from "../../public/assets/icons/data_analyticss.png";

export default function RetailIndustry() {
  return (
    <div className="container-fluid padding py-5">
      <div className="row text-center text-md-start">
        <h2 className="text__text1">Retail Industry and Technology Issues</h2>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={integrationIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Integration and Compatibility</h4>
          <small className="text__text1 mt-3">
            Seamless integration of diverse systems and data sources through
            custom software frameworks and APIs
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={cyberIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cybersecurity and Data Privacy</h4>
          <small className="text__text1 mt-3">
            Robust security measures, encryption, and compliance with data
            privacy regulations to protect customer data
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={scalaIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Scalability and Flexibility</h4>
          <small className="text__text1 mt-3">
            Leveraging cloud technologies and microservices for adaptable
            growth.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={legacyIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Legacy System Modernization</h4>
          <small className="text__text1 mt-3">
            Smooth analysis of your e-commerce, migration, and custom software
            solutions to modernize legacy systems without disruptions
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={dataIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Data Analytics and Insights</h4>
          <small className="text__text1 mt-3">
            Advanced analytics capabilities, data visualization, and AI
            integration help you take actionable insights.
          </small>
          <br />
        </div>
      </div>
    </div>
  );
}
