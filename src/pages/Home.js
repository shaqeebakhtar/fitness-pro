import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");

  return (
    <div>
      <Hero />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
