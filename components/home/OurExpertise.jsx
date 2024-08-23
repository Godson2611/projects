import Right_arrow from "../../public/assets/icons/home_icons/right_arrow.svg";

import webAppIcon from "../../public/assets/icons/web_app_development.png";
import mobileAppIcon from "../../public/assets/icons/mobile_development.png";
import UiUx from "../../public/assets/icons/ui_ux.png";
import qualityIcon from "../../public/assets/icons/quality_assurance.png";
import cloudIcon from "../../public/assets/icons/cloud_services.png";
import aImLIcon from "../../public/assets/icons/ai_ml.png";
import bpoKpoIcon from "../../public/assets/icons/bpo_kpo.png";
import Image from "next/image";
import Link from "next/link";

export default function OurExpertise() {
  return (
    <div className="container-fluid padding">
      <div className="row g-3 text-center text-md-start">
        <h2 className="text__text1">Our Expertise</h2>
        <h5 className="text__text2 fw-">
          Empower Your Success with Our Tailored Solutions
        </h5>
      </div>
      <div className="row  d-flex align-items-center text-center text-md-start ">
        <div className="col-12 col-md-6 mt-4 col-lg-4 red__card__hover">
          <Link href="web-app" className="text-decoration-none">
            <Image src={webAppIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Web App Development</h4>
            <small className="text__text1 mt-3">
              Unlock the full potential of your business with our custom web app
              development, delivering robust and user-friendly solutions.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more
              {/* <Image
                src={rightArrow}
                alt="right-arrow"
                className="arrow_hover "
              /> */}
              <Right_arrow className="red__hover" />
            </p>
          </Link>
        </div>
        {/* <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="mobile-app" className="text-decoration-none">
            <Image src={mobileAppIcon} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">Mobile App Development</h4>
            <small className="text__text1 mt-3">
              Transform your business with our mobile app development services,
              offering intuitive and high-performing solutions for all
              platforms.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="ui-ux" className="text-decoration-none">
            <Image src={UiUx} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">UI/UX Services & Testing</h4>
            <small className="text__text1 mt-3">
              Deliver exceptional user experiences and flawless functionality
              with our expert UI/UX design and thorough testing services.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="quality-assurance" className="text-decoration-none">
            <Image src={qualityIcon} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">Quality Assurance & Testing</h4>
            <small className="text__text1 mt-3">
              Guarantee excellence and dependability with our comprehensive
              Quality Assurance and Testing services.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="cloud-services" className="text-decoration-none">
            <Image src={cloudIcon} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">Cloud Services</h4>
            <small className="text__text1 mt-3">
              Optimize your business operations with our scalable and secure
              cloud services, tailored to your needs.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="ai-ml-services" className="text-decoration-none">
            <Image src={aImLIcon} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">AI/ML Services</h4>
            <small className="text__text1 mt-3">
              Leverage the power of AI/ML to drive innovation and efficiency
              with our advanced, tailored solutions.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-4 col-lg-4">
          <Link href="bpo-kpo" className="text-decoration-none">
            <Image src={bpoKpoIcon} alt="mobile-logo" width={70} />
            <h4 className="text__text1 mt-3">BPO/KPO Services</h4>
            <small className="text__text1 mt-3">
              Boost efficiency and focus on your core business with our reliable
              BPO and KPO services, designed to handle complex processes and
              deliver actionable.
            </small>
            <br />
            <p className="text__text1 fw-semibold mt-3">
              Learn more <Image src={rightArrow} alt="right-arrow" />
            </p>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
