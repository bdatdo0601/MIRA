import React from "react";
import MiraDraggable from "../Draggable";
import "./index.scss";

const Title: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <MiraDraggable>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </MiraDraggable>
);

export default Title;
