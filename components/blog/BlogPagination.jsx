import React from "react";
import rightIcon from "../../public/assets/icons/right_arrow.png";
import leftIcon from "../../public/assets/icons/left_arrow.png";
import Image from "next/image";

const BlogPagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center align-items-center my-5">
        <li className="page-item mt-1">
          <span
            className="btn blog__page weight__500 text__text1 me-4"
            onClick={goToPrevPage}
          >
            <Image src={leftIcon} alt=" left_icon" width={15} />
          </span>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={` page-item px-3  ${
              currentPage == pgNumber ? "active" : ""
            } `}
          >
            <span
              onClick={() => setCurrentPage(pgNumber)}
              className={`page-link px-3  weight__500 text__text1 rounded-1 ${
                currentPage == pgNumber ? "blue text-white" : "blog__page"
              }`}
            >
              {pgNumber}
            </span>
          </li>
        ))}
        <li className="page-item mt-1">
          <span
            className="btn blog__page weight__500 text__text1 ms-4"
            onClick={goToNextPage}
          >
            <Image src={rightIcon} alt="right_icon" width={15} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
