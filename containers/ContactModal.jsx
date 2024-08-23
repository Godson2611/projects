import Image from "next/image";
import xIcon from "../public/assets/icons/x.png";
import attachIcon from "../public/assets/icons/attach.png";

export default function ContactModal() {
  return (
    <div
      className="modal fade"
      id="contactUs"
      tabindex="-1"
      aria-labelledby="contactUsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-body p-5">
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Image
                  role="button"
                  tabindex="0"
                  className="object-fit-contain"
                  width={20}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  src={xIcon}
                  alt="close_icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
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
        </div>
      </div>
    </div>
  );
}
