import Image from "next/image";
import cloudIcon from "../../public/assets/icons/cloud_deployment.png";
import cloudAppIcon from "../../public/assets/icons/cloud_app_dev.png";
import cloudMaintenanceIcon from "../../public/assets/icons/cloud_maintenance.png";
import ContactModal from "@/containers/ContactModal";

export default function WhatWeDoCloud() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">What We Do </h2>
        <h5 className="text__text2 fw-">
          Comprehensive cloud services or specific solutions like
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={cloudIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cloud Deployment</h4>
          <small className="text__text1 mt-3">
            Seamlessly deploy and scale your applications with our expert cloud
            deployment services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={cloudAppIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cloud App Development</h4>
          <small className="text__text1 mt-3">
            Build robust and scalable applications with our specialized cloud
            app development services.
          </small>
          <br />
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Image src={cloudMaintenanceIcon} alt="web-logo" width={70} />
          <h4 className="text__text1 mt-3">Cloud Maintenance & Support</h4>
          <small className="text__text1 mt-3">
            Keep your cloud infrastructure running smoothly with our dedicated
            maintenance and support services.
          </small>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
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
  );
}
