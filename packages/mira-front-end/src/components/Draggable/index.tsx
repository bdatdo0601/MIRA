import React from "react";
import "./index.scss";

const Draggable = require("react-draggable");

interface MiraClockProps {
  children: React.ReactNode;
}

const MiraDraggable: React.FC<MiraClockProps> = ({ children }) => {
  return (
    <Draggable>
      <div className="draggableElement">{children}</div>
    </Draggable>
  );
};

export default MiraDraggable;
