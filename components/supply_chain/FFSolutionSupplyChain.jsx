import Image from "next/image";
import erpIcon from "../../public/assets/icons/erp_systems.png";
import supplyIcon from "../../public/assets/icons/supply_chains.png";
import procurementIcon from "../../public/assets/icons/procurements.png";
import warehouseIcon from "../../public/assets/icons/warehouses.png";
import transportIcon from "../../public/assets/icons/transport.png";
import ai_rpaIcon from "../../public/assets/icons/ai_rpa.png";
import analyticIcon from "../../public/assets/icons/analytics.png";
import ContactModal from "@/containers/ContactModal";

export default function FFSolutionSupplyChain() {
  return (
    <>
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">
            First Floor Solutions for Supply Chain Management
          </h2>
          <h5 className="text__text2 fw-medium">
            First Floor offers comprehensive solutions tailored to the specific
            needs of these industries, ensuring efficient, resilient, and
            cost-effective supply chain operations
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={erpIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">ERP Systems</h4>
            <small className="text__text1 mt-3">
              Custom development and implementation for efficient communication
              and coordination.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={supplyIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Supply Chain Solutions</h4>
            <small className="text__text1 mt-3">
              Development of platforms for seamless integration and management
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={procurementIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Procurement Solutions</h4>
            <small className="text__text1 mt-3">
              Streamlining procurement processes with automated solutions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={warehouseIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Warehouse Management</h4>
            <small className="text__text1 mt-3">
              Cloud-based systems for optimized inventory and shipping
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={transportIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Transportation Management</h4>
            <small className="text__text1 mt-3">
              Custom TMS for efficient logistics
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={analyticIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Data Analytics</h4>
            <small className="text__text1 mt-3">
              Advanced analytics for actionable insights
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={ai_rpaIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">AI and RPA</h4>
            <small className="text__text1 mt-3">
              Automating and optimizing supply chain processes for increased
              efficiency
            </small>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Want to leverage supply Management Technology for Efficiency?
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
      <hr className="hr" />
    </>
  );
}
