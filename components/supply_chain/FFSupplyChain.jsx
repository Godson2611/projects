import Image from "next/image";
import procurementIcon from "../../public/assets/icons/procurement.png";
import productionIcon from "../../public/assets/icons/production.png";
import inventoryIcon from "../../public/assets/icons/inventory.png";
import logisticsIcon from "../../public/assets/icons/logistics.png";
import supplierIcon from "../../public/assets/icons/supplier.png";
import data_analyticIcon from "../../public/assets/icons/data_analytic.png";
import technologyIcon from "../../public/assets/icons/technology.png";

export default function FFSupplyChain() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__text1">First Floor Retail Software Solutions</h2>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={procurementIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Procurement</h4>
            <small className="text__text1 mt-3">
              Sourcing raw materials and components from reliable suppliers
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={productionIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Production Planning</h4>
            <small className="text__text1 mt-3">
              Coordinating manufacturing processes to meet demand forecasts
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={inventoryIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Inventory Management</h4>
            <small className="text__text1 mt-3">
              Keeping optimal inventory levels to avoid overstocking or
              stockouts
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={logisticsIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Logistics</h4>
            <small className="text__text1 mt-3">
              Efficient transportation and warehousing solutions to ensure
              timely delivery
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={supplierIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Supplier Relationship Management
            </h4>
            <small className="text__text1 mt-3">
              Building strong relationships with suppliers to ensure quality and
              reliability.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={data_analyticIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Data Analytics</h4>
            <small className="text__text1 mt-3">
              Leveraging data to make informed decisions and optimize the supply
              chain.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={technologyIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Technology Integration</h4>
            <small className="text__text1 mt-3">
              Implementing advanced technologies like IoT, AI, and blockchain to
              enhance supply chain visibility and efficiency.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
