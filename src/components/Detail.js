import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = ({ exerciseDetail }) => {
  const navigate = useNavigate();
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (
    <section className="container padding-block-700">
      <button
        className="go-back button uppercase ff-primary"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
      <div className=" exercise-detail">
        <img src={gifUrl} alt={name} className="exercise-image" />
        <div className="exercise-info">
          <h2
            className="ff-primary fs-secondary-heading fw-bold padding-block-500 text-primary-400"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </h2>
          <p>
            The {name} is one of the best exercise to target your {target} and
            will help you to loose fat from {bodyPart} area fast. This exercise
            only needs {equipment}.
          </p>
          <div
            className="exercise-info-meto fs-500 padding-block-500"
            style={{ textTransform: "capitalize" }}
          >
            <p>
              <span className=" fw-semi-bold">Target Muscles Group:</span>{" "}
              {target}
            </p>
            <p>
              <span className=" fw-semi-bold">Body Part Targeted:</span>{" "}
              {bodyPart}
            </p>
            <p>
              <span className=" fw-semi-bold">Equipment:</span> {equipment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
