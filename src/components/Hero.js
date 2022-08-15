import React from "react";

const Hero = () => {
  return (
    <div className="section-hero">
      <section className="container ">
        <div
          className="container--hero flex"
          style={{ alignItems: "flex-start" }}
        >
          <div
            className="container--hero-info text-neutral-100"
            style={{ marginBlock: "7rem" }}
          >
            <h1 className="ff-primary fs-primary-heading fw-bold">
              Build a perfect body for good and healthy life
            </h1>
            <p style={{ marginTop: "1em" }}>
              Search from the range of exercises and get started today
            </p>
            <button
              className="button uppercase bg-primary-400 text-neutral-100 ff-primary fs-500"
              style={{ marginTop: "1em" }}
            >
              Explore Exercises
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
