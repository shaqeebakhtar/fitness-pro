import React from "react";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const cardStyle = {
    width: "100%",
    padding: "0.5em 1.5em",
    cursor: "pointer",
    textAlign: "center",
    border: "1px solid hsl(0, 0%, 20%)",
    borderRadius: "100vw",
    textTransform: "capitalize",
  };

  return (
    <button
      className="body-part-card fs-500"
      style={cardStyle}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      }}
    >
      {item}
    </button>
  );
};

export default BodyPart;
