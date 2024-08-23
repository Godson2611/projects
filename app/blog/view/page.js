import Image from "next/image";
import profile1 from "../../../public/assets/images/profile1.png";
import postImage1 from "../../../public/assets/images/view_post1.png";
import postImage2 from "../../../public/assets/images/view_post2.png";
import sim_blog1 from "../../../public/assets/images/sim_blog1.png";

export default function page() {
  return (
    <>
      <main>
        <div className="blog__my container-fluid p-5">
          <h1 className="text__text1 fw-semibold">
            How Flutter facilitates collaboration between designers and
            developers at L+R
          </h1>
          <div className="row my-5 g-5">
            <div className="col-md-12 col-lg-6">
              <div className="d-flex justify-content-between flex-wrap">
                <span className="d-flex align-items-start">
                  <Image
                    src={profile1}
                    alt="blog_img"
                    className="pe-2 img-fluid object-fit-contain"
                    width={35}
                  />
                  <p className="text__text1 small">
                    Rohith Shanmugam - 15 Mar 2024
                  </p>
                </span>
                <p className="small text__text2">12 min read</p>
              </div>
              <div>
                <Image
                  src={postImage1}
                  alt="view_post"
                  className="img-fluid my-3 w-100"
                />
                <p className="text__text2 lh-lg my-4">
                  Flutter 3.22 and Dart 3.4 offer performance improvements and
                  platform-specific refinements that bring us closer to that
                  vision. We’re particularly excited to share more about our
                  journey with Wasm, but you’ll find so much more, including an
                  improved Impeller rendering engine, smoother visuals and
                  reduced CPU usage on iOS, enhanced platform navigation with
                  Android’s predictive back gesture, expanded monetization
                  options with the Google Mobile Ads SDK, and a new powerful
                  deep link validator in DevTools.
                  <br />
                  <br />
                  Dart developers will enjoy streamlined API migration with dart
                  fix directly in the IDE and new DevTools capabilities for
                  advanced profiling. Plus, you can now preview the Vertex AI
                  for Firebase Dart SDK, integrating AI-powered features with
                  robust security measures. <br />
                  <br />
                  Dart developers will enjoy streamlined API migration with dart
                  fix directly in the IDE and new DevTools capabilities for
                  advanced profiling. Plus, you can now preview the Vertex AI
                  for Firebase Dart SDK, integrating AI-powered features with
                  robust security measures. <br />
                  <br /> Flutter 3.22 and Dart 3.4 offer performance
                  improvements and platform-specific refinements that bring us
                  closer to that vision. We’re particularly excited to share
                  more about our journey with Wasm, but you’ll find so much
                  more, including an improved Impeller rendering engine,
                  smoother visuals and reduced CPU usage on iOS, enhanced
                  platform navigation with Android’s predictive back gesture,
                  expanded monetization options with the Google Mobile Ads SDK,
                  and a new powerful deep link validator in DevTools. <br />
                  <br /> Dart developers will enjoy streamlined API migration
                  with dart fix directly in the IDE and new DevTools
                  capabilities for advanced profiling. Plus, you can now preview
                  the Vertex AI for Firebase Dart SDK, integrating AI-powered
                  features with robust security measures. <br />
                  <br /> Dart developers will enjoy streamlined API migration
                  with dart fix directly in the IDE and new DevTools
                  capabilities for advanced profiling. Plus, you can now preview
                  the Vertex AI for Firebase Dart SDK, integrating AI-powered
                  features with robust security measures.
                </p>
              </div>
              <div>
                <Image
                  src={postImage2}
                  alt="view_post"
                  className="img-fluid my-3 w-100"
                />
                <p className="text__text2 lh-lg my-4">
                  Dart developers will enjoy streamlined API migration with dart
                  fix directly in the IDE and new DevTools capabilities for
                  advanced profiling. Plus, you can now preview the Vertex AI
                  for Firebase Dart SDK, integrating AI-powered features with
                  robust security measures.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="text__text1">Similar Blog</h3>
              <div className="card mb-3 border-0 rounded-0 bg-body-tertiary">
                <div className="row g-0">
                  <div className="col-md-5">
                    <Image
                      src={sim_blog1}
                      className="img-fluid object-fit-cover h-100"
                      alt="blog__img"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title flex-g">
                        How Flutter facilitates collaboration between designers
                        and developers at L+R.....
                      </h5>
                      <p className="card-text">
                        <small className="text__text2">15 Feb 2024</small>
                      </p>
                      <p className="card-text">
                        <small className="text__text1">15 Feb 2024</small>
                      </p>
                    </div>
                  </div>
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
