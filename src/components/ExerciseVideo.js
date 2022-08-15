import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) {
    return <p className="container">Loading...</p>;
  }

  return (
    <section className="container">
      <h1 className="ff-primary fs-700 fw-bold">
        Watch videos of <span className="text-primary-400">{name}</span>
      </h1>
      <div className="videos-container padding-block-500">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div
              className="video-info"
              style={{ background: "#eaeaea", padding: "0.75em" }}
            >
              <p className="fw-semi-bold text-neutral-900">
                {item.video.title}
              </p>
              <p className="fw-light fs-300  text-neutral-900">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExerciseVideo;
