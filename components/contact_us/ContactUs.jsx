import Image from "next/image";
import mailIcon from "../../public/assets/icons/mail.png";
import phoneIcon from "../../public/assets/icons/phone.png";
import locationIcon from "../../public/assets/icons/location.png";
import attachIcon from "../../public/assets/icons/attach.png";

export default function ContactUs() {
  return (
    <>
      <div className="container component mx-auto">
        <h1 className="text__text1 text-center fw-semibold">Contact Us</h1>
        <div className="row mt-5 g-5">
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column">
              <h4 className="text__text1 mb-4">Contact details</h4>
              <p className="text__text2">
                <span className="pe-2">
                  <Image src={mailIcon} width={25} alt="mail_icon" />
                </span>
                sales@firstfloor.agency
              </p>
              <p className="text__text2">
                <span className="pe-2">
                  <Image src={phoneIcon} width={25} alt="phone_icon" />
                </span>
                (+91) - 6364840325
              </p>
            </div>
            <div className="d-flex flex-column">
              <h4 className="text__text1 mb-4 mt-5">Address</h4>
              <div className="d-flex">
                <span className="pe-2">
                  <Image src={locationIcon} width={25} alt="location_icon" />
                </span>
                <p className="text__text2 lh-lg">
                  2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank,
                  Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru,
                  Karnataka 570017.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h3 className="text__text1 mb-4">
              Connect with our sales consultants
            </h3>
            <p>Fill the form, we will Reach you</p>
            <form>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label htmlFor="firstName" class="form-label small">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control border-0 input__bg p-2"
                      id="firstName"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div class="mb-3 mt-5">
                    <label htmlFor="contactNumber" class="form-label small">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      class="form-control border-0 input__bg p-2"
                      id="contactNumber"
                      placeholder="6364840325"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label htmlFor="email" class="form-label small">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control border-0 input__bg p-2"
                      id="email"
                      placeholder="sales@firstfloor.agency"
                    />
                  </div>
                  <div class="mb-3 mt-5">
                    <label htmlFor="budget" class="form-label small">
                      What’S your Budget?
                    </label>
                    <select
                      id="budget"
                      class="form-select border-0 input__bg p-2 text__text2 small_select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Your Budget</option>
                      <option value="">Upto $5000</option>
                      <option value="">$5000 to $10000</option>
                      <option value="">$10000 to $25000</option>
                      <option value="">Over $25000</option>
                      <option value="">Can’t disclose</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 mt-5">
                  <label htmlFor="description" class="form-label small">
                    Description
                  </label>
                  <textarea
                    class="form-control border-0 input__bg p-2"
                    id="description"
                    rows="5"
                    placeholder="Describe your needs in details"
                  ></textarea>
                </div>
                <div className="mb-3 mt-3 d-flex">
                  <label htmlFor="attach_file" class="form-label">
                    <Image
                      src={attachIcon}
                      alt="attach_file_icon"
                      className="me-2"
                    />
                  </label>
                  <input
                    name="attach_file"
                    className="d-none"
                    type="file"
                    id="attach_file"
                  />
                  <p className="text__text1">
                    Attach any Files you feel would be useful
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col text-end">
                  <button
                    type="submit"
                    className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
