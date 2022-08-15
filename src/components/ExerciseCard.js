import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const exerciseCard = {
    padding: "0.75em",
    borderTop: "3px solid var(--clr-primary-400)",
    width: "100%",
    textDecoration: "none",
    textTransform: "capitalize",
    color: "var(--clr-neutral-900)",
    boxShadow: "0 0 1rem 0 rgb(0, 0,0,0.15)",
    transition: "transform 50ms ease",
  };
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="exercise-card"
      style={exerciseCard}
    >
      <img src={exercise.gifUrl} alt={exercise.name} />
      <p className="fw-semi-bold" style={{ marginInline: "0.5em" }}>
        {exercise.name}
      </p>
      <div className="exercise-meta flex" style={{ marginBlock: "0.75em" }}>
        <div style={{ background: "#ffa9a9" }}>{exercise.target}</div>
        <div style={{ background: "#fcc757" }}>{exercise.bodyPart}</div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
