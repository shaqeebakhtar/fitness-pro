import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="padding-block-400"
      style={{ backgroundColor: "#fff3f4", marginTop: "4rem" }}
    >
      <div
        className="container footer-wrapper flex"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Link
          to="/"
          className="text-neutral-900"
          style={{ textDecoration: "none" }}
        >
          <h1 className="fw-bold ff-primary fs-700 uppercase">
            Fitness<span className="text-primary-400">PRO</span>
          </h1>
        </Link>
        <a
          href="https://github.com/shaqeebakhtar"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-light fs-300 text-primary-400">
            Developed by Shaqeeb
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
