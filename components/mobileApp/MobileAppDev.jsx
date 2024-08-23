import React from "react";
import mobileAppIcon from "../../public/assets/images/mobile_app.svg?url";
import engageIcon from "../../public/assets/icons/engage.png";
import empowerIcon from "../../public/assets/icons/empower.png";
import excelIcon from "../../public/assets/icons/excel.png";
import Image from "next/image";
import ContactModal from "@/containers/ContactModal";

const MobileAppDev = () => {
  return (
    <div className="container-fluid component">
      <div className="row mt-lg-5">
        <div className="col-lg-5 mt-5">
          <h1 className="text__text1 mb-4 mb-sm-5 fw-semibold lh-base">
            Mobile App Development
          </h1>
          <h3 className="text__text2 mb-3 mb-sm-4 lh-base">
            Future-proof, Feature-Rich Mobile App Solutions for your Growth.
          </h3>
          <p className="fs-5 text__text1">We Develop Mobile Apps that</p>
          <br />
          <div className="row mb-4 text-center me-5 row-cols-2 row-cols-md-3">
            <div className="col">
              <Image src={engageIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Engage</p>
            </div>
            <div className="col">
              <Image src={empowerIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Empower</p>
            </div>
            <div className="col">
              <Image src={excelIcon} alt="creative_icon" />
              <p className="text__text1 mt-3 weight__500">Excel</p>
            </div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#contactUs"
            className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
          >
            Contact US
          </button>
          <ContactModal />
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <Image
            className="img-fluid"
            src={mobileAppIcon}
            alt="mobile_page_image"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppDev;
