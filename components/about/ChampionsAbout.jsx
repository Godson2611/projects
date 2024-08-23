import Image from "next/image";
import zammenIcon from "../../public/assets/icons/zameen_about.png";
import jiviniIcon from "../../public/assets/icons/jivini_about.png";
import adairIcon from "../../public/assets/icons/adair_about.png";
import driveLahIcon from "../../public/assets/icons/drive_lah_about.png";
import homeChefIcon from "../../public/assets/icons/home_chef_about.png";
import cowRideIcon from "../../public/assets/icons/cowride_about.png";
import indianIcon from "../../public/assets/icons/indian_about.png";
import happyCreditIcon from "../../public/assets/icons/happy_credit_about.png";
import depaulIcon from "../../public/assets/icons/depaul_about.png";
import ranchpalIcon from "../../public/assets/icons/ranchpal_about.png";
import ContactModal from "@/containers/ContactModal";

export default function ChampionsAbout() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__text1 mb-5">The Champions Partners</h2>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start">
          <div className="col-12 text-center d-flex justify-content-around flex-wrap">
            <Image
              src={zammenIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={jiviniIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={adairIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={driveLahIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={homeChefIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
          </div>
          <div className="col-12 text-center d-flex justify-content-evenly px-5 flex-wrap">
            <Image
              src={cowRideIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
              width={230}
            />
            <Image
              src={indianIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={happyCreditIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={depaulIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
            <Image
              src={ranchpalIcon}
              alt="Partners_Icons"
              className="img-fluid object-fit-contain mt-5"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <p className="text__text1 fw-medium">
              Get a Free Discovery and consultation
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Lets Chat!
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
    </div>
  );
}
