"use client";
import Link from "next/link";
import logo from "../public/assets/images/logo.svg?url";
import Image from "next/image";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function Header() {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRoutChange = () => {
  //     const navbarToggler = document.querySelector(".navbar-collapse");
  //     if (navbarToggler && navbarToggler.classList.contains("show")) {
  //       navbarToggler.classList.remove("show");
  //     }
  //   };
  //   router.events?.on("routeChangeComplete", handleRoutChange);
  //   return () => {
  //     router.events?.off("routeChangeComplete", handleRoutChange);
  //   };
  // }, [router.events]);
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid mx-md-5 py-sm-4 py-3">
          <Link href={"/"}>
            <Image src={logo} class="img-fluid" alt="first-floor-logo" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  text__text1"></span>
          </button>
          <div
            className="collapse navbar-collapse screen__height"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 gap-5 me-4">
              <li className="nav-item">
                <Link href="/" className="nav-link text__text1 fw-semibold">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link text__text1 fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu p-2 lh-lg">
                  <li>
                    <Link className="dropdown-item small" href="web-app">
                      Web App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="mobile-app">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="ui-ux">
                      UI/UX Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item small"
                      href="quality-assurance"
                    >
                      Quality Assurance & Testing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="cloud-services">
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="ai-ml-services">
                      AI/ML Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="bpo-kpo">
                      BPO/KPO Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link text__text1 fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul className="dropdown-menu p-2 lh-lg">
                  <li>
                    <Link className="dropdown-item small" href="fintech">
                      Banking and Fintech
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item small"
                      href="retail-tech-industry"
                    >
                      Retail Tech Industry
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="supply-chain">
                      Supply Chain Management
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item small" href="health-care">
                      Health Care & Life Sciences
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="blog"
                  className="nav-link nav-link text__text1 fw-semibold"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="about"
                  className="nav-link nav-link text__text1 fw-semibold"
                  aria-current="page"
                >
                  About us
                </Link>
              </li>
            </ul>
            <form role="search">
              <Link
                className="btn green text__text4 green__hover py-2"
                href="contact-us"
              >
                Contact US
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
