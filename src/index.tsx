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
    <div>
      <div className={appCssClasses.infoPanel}>
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
      <Sketch
        impl={new MySketch()}
        className={appCssClasses.mySketch}
        renderer="p2d"
      ></Sketch>
    </div>
  );
}

const container = document.getElementById("mainApp");
const root = createRoot(container!);
root.render(React.createElement(App));

export {};
