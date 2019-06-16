import React from "react";
import SimpleReactCalendar from "simple-react-calendar";
import MiraDraggable from "../Draggable";
import "./index.scss";

interface MiraCalendarProps {
  onDateClicked?: () => void;
  currentDay?: Date;
}

const MiraCalendar: React.FC<MiraCalendarProps> = ({ currentDay }) => {
  return (
    <MiraDraggable>
      <SimpleReactCalendar activeMonth={currentDay} />
    </MiraDraggable>
  );
};

MiraCalendar.defaultProps = {
  onDateClicked: () => {},
  currentDay: new Date(),
};

export default MiraCalendar;
