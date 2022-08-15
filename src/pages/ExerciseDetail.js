import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}%exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </>
  );
};

export default ExerciseDetail;
