import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import MiraCalendar from "../components/Calendar";
import MiraClock from "../components/Clock";
import MiraTitle from "../components/Title";

import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <MiraCalendar />
        <MiraClock />
        <MiraTitle title="MIRA" subtitle="MIrror Room Assistant" />
      </DndProvider>
    </div>
  );
};

export default App;
