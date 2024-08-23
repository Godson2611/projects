import Image from "next/image";
import rightArrow from "../../public/assets/icons/right_arrow.png";
import blog1 from "../../public/assets/images/blog1.png";
import blog2 from "../../public/assets/images/blog2.png";
import blog3 from "../../public/assets/images/blog3.png";
import blog4 from "../../public/assets/images/blog4.png";

export default function Blog() {
  return (
    <>
      <div className="container-fluid padding py-5">
        <div className="row text-center text-md-start g-3">
          <h2 className="text__text1">Blog</h2>
          <h5 className="text__text2 fw-medium mb-5">
            Expert Insights and updates for your Business Success
          </h5>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
          <div className="col">
            <div class="card border-1 rounded-4 h-100 blog__hover blog__border">
              <Image
                src={blog1}
                class="card-img-top object-fit-cover"
                alt="..."
              />
              <div class="card-body d-flex flex-column">
                <p class="card-text">
                  <small class="text__text2">February 12, 2024</small>
                </p>
                <h5 class="card-title text__text1 lh-base">
                  AI and ML to Hospitals and Pharmaceuticals
                </h5>
                <p class="card-text text__text2 flex-grow-1 mt-2 lh-lg">
                  AI and ML to Hospitals are changing how the health sector
                  performs.AI is artificial intelligence, and we all believe
                  that anything artificial is unhealthy! But though AI is
                  artificially induced intelligence.
                </p>
                <span className="text__text1 fw-semibold mt-3">
                  Read more <Image src={rightArrow} alt="right-arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border-1 rounded-4 h-100 blog__hover blog__border">
              <Image
                src={blog2}
                class="card-img-top object-fit-cover"
                alt="..."
              />
              <div class="card-body d-flex flex-column">
                <p class="card-text">
                  <small class="text__text2">June 3, 2023</small>
                </p>
                <h5 class="card-title text__text1 lh-base">
                  E-commerce, Mobile application development.
                </h5>
                <p class="card-text text__text2 flex-grow-1 mt-2 lh-lg">
                  In today’s digital landscape, where mobile devices have become
                  an integral part of our lives, e-commerce companies are
                  seeking innovative ways to stay ahead of the competition.
                </p>
                <span className="text__text1 fw-semibold mt-3">
                  Read more <Image src={rightArrow} alt="right-arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border-1 rounded-4 h-100 blog__hover blog__border">
              <Image
                src={blog3}
                class="card-img-top object-fit-cover"
                alt="..."
              />
              <div class="card-body d-flex flex-column">
                <p class="card-text">
                  <small class="text__text2">February 7, 2023</small>
                </p>
                <h5 class="card-title text__text1 lh-base">
                  Website Development- guidelines by First Floor
                </h5>
                <p class="card-text text__text2 flex-grow-1 mt-2 lh-lg">
                  Mobile Application or Website Development needs preparation
                  for the success of your project. A freelance, an in-house
                  development team, or the Right tech partner for your
                  development is the question of all.
                </p>
                <span className="text__text1 fw-semibold mt-3">
                  Read more <Image src={rightArrow} alt="right-arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border-1 rounded-4 h-100 blog__hover blog__border">
              <Image
                src={blog4}
                class="card-img-top object-fit-cover"
                alt="..."
              />
              <div class="card-body d-flex flex-column">
                <p class="card-text">
                  <small class="text__text2">March 3, 2023</small>
                </p>
                <h5 class="card-title text__text1 lh-base">
                  Staff Augmentation! A Perfect Solution For Your Critical
                  Projects
                </h5>
                <p class="card-text text__text2 flex-grow-1 mt-2 lh-lg">
                  Technology is a deep Ocean, you explore you seek more! There
                  is no ending to learning. The need for new technologies and
                  expertise is like waves that hit a Development company on a
                  regular basis.
                </p>
                <span className="text__text1 fw-semibold mt-3">
                  Read more <Image src={rightArrow} alt="right-arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
