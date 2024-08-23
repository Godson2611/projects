"use client";
import BlogCarousel from "@/containers/BlogCarousel";
import Image from "next/image";
import blog1 from "../../public/assets/images/blog1.png";
import rightArrow from "../../public/assets/icons/right_arrow.png";
import BlogPagination from "./BlogPagination";
import blog_data from "../../data/blog.js";
import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  const indexOfLastCard = currentPage * recordsPerPage;
  const indexOfFirstCard = indexOfLastCard - recordsPerPage;
  const currentPosts = blog_data
    .find((e) => e.all)
    .all.slice(indexOfFirstCard, indexOfLastCard);
  const nPages = Math.ceil(
    blog_data.find((e) => e.all).all.length / recordsPerPage
  );
  console.log("data", nPages);

  return (
    <>
      <div className="blog__my container">
        <h1 className="text__text1 fw-semibold my-5">Blog</h1>
        <BlogCarousel />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-5">
          {currentPosts.map((all_blog, id) => (
            <div key={id} className="col">
              <div class="card blog__border rounded-4 h-100 blog__hover">
                <Image
                  src={blog1}
                  class="card-img-top object-fit-cover rounded-top-4"
                  alt="blogs"
                />
                <div class="card-body d-flex flex-column">
                  <p class="card-text">
                    <small class="text__text2">{all_blog.subtitle}</small>
                  </p>
                  <h5 class="card-title text__text1 lh-base">
                    {all_blog.title}
                  </h5>
                  <span className="text__text1 fw-semibold mt-3">
                    Read more <Image src={rightArrow} alt="right-arrow" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <BlogPagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
