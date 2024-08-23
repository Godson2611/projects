import Image from "next/image";
import logo from "../public/assets/images/logo.svg?url";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-fluid padding py-5">
      <div className="row">
        <div className="col">
          <Link href={"/"}>
            <Image src={logo} alt="first-floor-logo" />
          </Link>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-4">
        <div className="col d-flex flex-column w-50 gap-3">
          <h4 className="text__text1">Services</h4>
          <p className="text__text2">
            <Link href="web-app" className="text-reset text-decoration-none">
              Web App Development
            </Link>
          </p>
          <p className="text__text2">
            <Link href="mobile-app" className="text-reset text-decoration-none">
              Mobile App Development
            </Link>
          </p>
          <p className="text__text2">
            <Link href="ui-ux" className="text-reset text-decoration-none">
              UI/UX Services & Testing
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="quality-assurance"
              className="text-reset text-decoration-none"
            >
              Quality Assurance & Testing
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="cloud-services"
              className="text-reset text-decoration-none"
            >
              Cloud Services
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="ai-ml-services"
              className="text-reset text-decoration-none"
            >
              AI/ML Services
            </Link>
          </p>
          <p className="text__text2">
            <Link href="bpo-kpo" className="text-reset text-decoration-none">
              BPO/KPO Services
            </Link>
          </p>
        </div>
        <div className="col d-flex flex-column w-50 gap-3">
          <h4 className="text__text1">Industries</h4>
          <p className="text__text2">
            <Link href="fintech" className="text-reset text-decoration-none">
              Banking and Fintech Services
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="retail-tech-industry"
              className="text-reset text-decoration-none"
            >
              Retail Tech Industry
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="supply-chain"
              className="text-reset text-decoration-none"
            >
              Supply Chain Management
            </Link>
          </p>
          <p className="text__text2">
            <Link
              href="health-care"
              className="text-reset text-decoration-none"
            >
              Health Care & Life Sciences
            </Link>
          </p>
        </div>
        <div className="col d-flex flex-column w-50 gap-3">
          <h4 className="text__text1">Legal</h4>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              Terms & Conditions
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              Privacy Policy
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              Refund and cancellation policy
            </a>
          </p>
        </div>
        <div className="col d-flex flex-column w-50 gap-3">
          <h4 className="text__text1">Social</h4>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              LinkedIn
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              Instagram
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              Facebook
            </a>
          </p>
        </div>
        <div className="col d-flex flex-column w-50 gap-3">
          <h4 className="text__text1">Contact</h4>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              sales@firstfloor.agency
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              (+91) - 6364840325
            </a>
          </p>
          <p className="text__text2">
            <a href="#!" className="text-reset text-decoration-none">
              2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank,
              Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru, Karnataka
              570017.
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <p className="text__text2 text-center">
           © First Floor Infotech Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
