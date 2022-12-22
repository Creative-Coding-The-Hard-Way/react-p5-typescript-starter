import "normalize.css";

import React from "react";
import { createRoot } from "react-dom/client";
import Sketch from "../lib/sketch";
import * as appCssClasses from "./index.module.css";
import MySketch from "./sketch";

function App() {
  return (
    <div>
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
