import ContactModal from "@/containers/ContactModal";

export default function WhyUsCloud() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row text-center text-md-start">
          <h2 className="text__text1">Why Us</h2>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">Seasoned Professionals</h4>
            <small className="text__text1 mt-3">
              We develop cutting-edge cloud applications that enhance your
              business capabilities and drive innovation
            </small>
            <br />
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">
              Options for Optimal Architecture
            </h4>
            <small className="text__text1 mt-3">
              We offer a range of architecture options tailored to your specific
              needs, ensuring the best possible fit for your business.
            </small>
            <br />
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">Ease Maintenance and Support</h4>
            <small className="text__text1 mt-3">
              We continuously monitor and optimize your cloud environment to
              maintain peak performance and security.
            </small>
            <br />
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">
              Continuous Monitoring and Optimization
            </h4>
            <small className="text__text1 mt-3">
              Our cloud solutions are designed to streamline and enhance your
              business operations, driving efficiency and productivity.
            </small>
            <br />
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">Optimizing Business Operations</h4>
            <small className="text__text1 mt-3">
              We provide comprehensive maintenance and support, ensuring your
              cloud infrastructure remains robust and reliable
            </small>
            <br />
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-4">
            <h4 className="text__text1 mt-3">Tailored Cloud Solutions</h4>
            <small className="text__text1 mt-3">
              We deliver bespoke cloud solutions that are customized to meet the
              unique requirements of your business.
            </small>
            <br />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col text-center mt-5">
            <button
              data-bs-toggle="modal"
              data-bs-target="#contactUs"
              className="btn blue text__text4 px-4 py-2 border-0 rounded-1 blue__hover"
            >
              Get a Demo
            </button>
            <ContactModal />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
