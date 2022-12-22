import "normalize.css";

import React from "react";
import { createRoot } from "react-dom/client";
import Sketch from "../lib/sketch";
import * as appCssClasses from "./index.module.css";
import MySketch, { store, BackgroundColor } from "./sketch";
import { useSnapshot } from "valtio";

function App() {
  const snap = useSnapshot(store);
  return (
    <div className={appCssClasses.mainAppDisplay}>
      <Sketch
        impl={new MySketch()}
        className={appCssClasses.sketchArea}
        renderer="p2d"
      ></Sketch>
      <div className={appCssClasses.controlPanelArea}>
        <h2>Point Count: {snap.pointCount}</h2>
        <select
          value={snap.background}
          onChange={(event) => {
            store.background = event.target.value as BackgroundColor;
          }}
        >
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="gray">Gray</option>
        </select>
      </div>
    </div>
  );
}

const container = document.getElementById("mainApp");
const root = createRoot(container!);
root.render(React.createElement(App));

export {};
