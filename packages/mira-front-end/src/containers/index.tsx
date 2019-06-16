import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import MiraClock from "../components/Clock";
import Title from "../components/Title";

import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <MiraClock />
        <Title title="MIRA" subtitle="MIrror Room Assistant" />
      </DndProvider>
    </div>
  );
};

export default App;
