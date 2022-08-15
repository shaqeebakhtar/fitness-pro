import React from "react";
import BodyPart from "./BodyPart";

const BodyParts = ({ data, bodyPart, setBodyPart }) => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </>
  );
};

export default BodyParts;
