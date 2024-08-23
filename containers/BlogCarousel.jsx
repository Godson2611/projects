import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import rightIcon from "../public/assets/icons/right_arrow.png";
import leftIcon from "../public/assets/icons/left_arrow.png";

const BlogCarousel = ({ blogMenus }) => {
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 6 },
    1350: { items: 8 },
  };

  const blogMenu = [
    "All",
    "Ai",
    "React.js",
    "Node.js",
    "Javascript",
    "Express",
    "Flutter",
    "Block chain",
  ];
  const items = blogMenu.map((menu, id) => (
    <button key={id} className="btn blog__menu__btn weight__500 text__text1">
      {menu}
    </button>
  ));

  return (
    <div className="container px-md-5">
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="d-none d-lg-block border-0 mx-4 p-2 rounded-1"
          onClick={() => carouselRef.current.slidePrev()}
        >
          <span className="p-2">
            <Image src={leftIcon} width={15} />
          </span>
        </button>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay="off"
          autoPlayInterval={3000}
          infinite
          disableDotsControls
          disableButtonsControls
          ref={carouselRef}
        />
        <button
          className="d-none d-lg-block border-0 mx-4 p-2 rounded-1"
          onClick={() => carouselRef.current.slideNext()}
        >
          <span className="p-2">
            <Image src={rightIcon} width={15} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
