import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container padding-block-400">
      <div
        className="header flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <Link
            to="/"
            className="text-neutral-900"
            style={{ textDecoration: "none" }}
          >
            <h1 className="fw-bold ff-primary fs-700 uppercase">
              Fitness<span className="text-primary-400">PRO</span>
            </h1>
          </Link>
        </div>
        <nav
          className="primary-navigation flex fw-semi-bold "
          style={{ gap: "var(--size-600)" }}
        >
          <Link
            to="/"
            className="text-neutral-900"
            style={{
              textDecoration: "none",
              borderBottom: "3px solid var(--clr-primary-400)",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            className="text-neutral-900"
            style={{ textDecoration: "none" }}
          >
            Exercises
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
