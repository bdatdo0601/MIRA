import { Moment } from "moment";
import React from "react";
import Clock from "react-live-clock";
import MiraDraggable from "../Draggable";
import "./index.scss";

interface MiraClockProps {
    format?: string;
    timezone?: string;
    onTimeChange?: (output: any, previousOutput: any, moment: Moment) => void;
}

const MiraClock: React.FC<MiraClockProps> = ({ timezone, format }) => {

    return (
        <MiraDraggable>
            <Clock className="mira-clock" format={format} ticking timezone={timezone} />
        </MiraDraggable>
    );
};

MiraClock.defaultProps = {
    format: "HH:mm:ss",
    onTimeChange: () => {},
    timezone: "US/Eastern",
};

export default MiraClock;
