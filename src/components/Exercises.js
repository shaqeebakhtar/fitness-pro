import React, { useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const containerStyle = {
    display: "grid",
    rowGap: "2rem",
    columnGap: "1rem",
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExerciseData();
  }, [bodyPart]);

  return (
    <section className="container " id="exercises">
      <h3
        className="fw-semi-bold fs-700 ff-primary"
        style={{ marginBottom: "1em" }}
      >
        Showing Results for your search
      </h3>
      <div style={containerStyle} className="exercise-card-wrapper">
        {exercises.slice(0, 28).map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

export default Exercises;
