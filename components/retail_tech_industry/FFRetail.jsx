import Image from "next/image";
import enterpriseIcon from "../../public/assets/icons/enterprise.png";
import e_comIcon from "../../public/assets/icons/e_com.png";
import storageIcon from "../../public/assets/icons/storage.png";
import warehouseIcon from "../../public/assets/icons/warehouse.png";
import customerIcon from "../../public/assets/icons/customer.png";
import ai_basedIcon from "../../public/assets/icons/ai_based.png";
import paymentsIcon from "../../public/assets/icons/payments.png";
import retail_ffIcon from "../../public/assets/icons/retail_ff.png";
import pointIcon from "../../public/assets/icons/point.png";
import roboticIcon from "../../public/assets/icons/robotic.png";
import computerIcon from "../../public/assets/icons/computer.png";

export default function FFRetail() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">First Floor Retail Software Solutions</h2>
          <h5 className="text__text2 fw-medium">
            First Floor Comprehensive Solution for Technology Concerns of Retail
            Industry
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={enterpriseIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Enterprise Resource Planning (ERP)
            </h4>
            <small className="text__text1 mt-3">
              Custom development and implementation of ERP systems like SAP ERP
              and Oracle ERP for efficient internal communication and
              departmental coordination.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={e_comIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">E-Commerce Solutions</h4>
            <small className="text__text1 mt-3">
              Retail software development services to build intuitive and
              customer-centric e-commerce platforms.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={retail_ffIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Retail Apps</h4>
            <small className="text__text1 mt-3">
              Custom retail app development with personalized experiences for
              customers
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={storageIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Storage and Supply Chain</h4>
            <small className="text__text1 mt-3">
              Modernizing and integrating supply chain management solutions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={warehouseIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Warehouse Management Systems</h4>
            <small className="text__text1 mt-3">
              Cloud-based systems for optimized inventory management and
              shipping.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={computerIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Computer Vision & Behavioral Analytics
            </h4>
            <small className="text__text1 mt-3">
              Custom retail app development with personalized experiences for
              customers
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={paymentsIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Payments and Wallets Integration
            </h4>
            <small className="text__text1 mt-3">
              Expertise in payment gateway development and wallet integrations.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={pointIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Point of Sales (POS)</h4>
            <small className="text__text1 mt-3">
              Feature-rich POS systems with payment processing and contactless
              payments.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={customerIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Customer Relationship Management (CRM)
            </h4>
            <small className="text__text1 mt-3">
              Feature-rich POS systems with payment processing and contactless
              payments.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={ai_basedIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              AI-based Robotic Solutions for Retail
            </h4>
            <small className="text__text1 mt-3">
              Applying AI to streamline supply chain processes and enhance
              customer support.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={roboticIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">
              Robotic Process Automation (RPA)
            </h4>
            <small className="text__text1 mt-3">
              Automating operations in HR, supply chain, accounting, and IT
              services.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
