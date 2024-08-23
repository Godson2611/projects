import Image from "next/image.js";
import blog1 from "../../../public/assets/images/blog1.png";
import rightArrow from "../../../public/assets/icons/home_icons/right_arrow.svg?url";
import profile1 from "../../../public/assets/images/profile1.png";

export default function page() {
  return (
    <>
      <main>
        <div className="blog__my container">
          <div className="row my-5">
            <div className="col d-flex align-items-center align-items-md-start text-center text-md-start flex-column flex-md-row">
              <Image
                src={profile1}
                className="img-fluid object-fit-contain pe-3 py-3"
              />
              <div>
                <div className="d-flex justify-content-lg-between flex-column flex-lg-row">
                  <div>
                    <h1 className="text__text1 fw-semibold">
                      Rohith Shanmugam
                    </h1>
                    <p className="text__text2 small">Role Details</p>
                  </div>
                  <p className="text__text2 text-nowrap small">
                    Published on 15 Feb 2024
                  </p>
                </div>
                <p className="text__text2">
                  Dart developers will enjoy streamlined API migration with dart
                  fix directly in the IDE and new DevTools capabilities for
                  advanced profiling. Plus, you can now preview the Vertex AI
                  for Firebase Dart SDK, integrating AI-powered features with
                  robust security measures.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-5">
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">
                      ksjdkfjlsdkfjlskdfjlsdkfjsdlkfjlsdkfj
                    </small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    lksjdflksdjflksdjfdslkfj
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr className="hr" />
    </>
  );
}
