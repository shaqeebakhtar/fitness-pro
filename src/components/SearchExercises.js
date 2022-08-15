import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyParts from "./BodyParts";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      // console.log(bodyPartsData);

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      // console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
      // console.log(searchedExercises);
    }
  };

  return (
    <section className="container padding-block-900">
      <h2 className="ff-primary fs-secondary-heading fw-bold">
        Search for Exercises
      </h2>
      <div className="search-field">
        <input
          className="search"
          type="text"
          value={search}
          placeholder="Search for Exercises"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="button search-btn uppercase bg-primary-400 text-neutral-100 letter-spacing-1 ff-primary fs-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <h3
        className="fs-700 fw-semi-bold ff-primary"
        style={{ marginBlock: "1em" }}
      >
        Search exercises by body parts
      </h3>
      <div className="body-parts-exercises">
        <BodyParts
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </section>
  );
};

export default SearchExercises;
