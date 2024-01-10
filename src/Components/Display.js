import React from "react";
import northern from "../images/NorthernHemiSphere.jpg";
import southern from "../images/SouthernHemiSphere.jpg";
import "../Components/Display.css";

const hemiSphereConfig = {
  Northern: {
    text: "It is a Northern HemiSphere",
    picture: northern,
  },
  Southern: {
    text: "It is a Southern HemiSphere",
    picture: southern,
  },
};

const Display = ({ latitude }) => {
  const HemiSphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemiSphereConfig[HemiSphere];
  return (
    <div className={HemiSphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemiSphere picture" />
        </div>
        <div className="ui teal bottom attached label">
          <h1> {text} </h1>
        </div>
      </div>
    </div>
  );
};
export default Display;
