import P5Sketch from "../lib/P5Sketch";
import P5 from "p5";

import { proxy } from "valtio";

export type BackgroundColor = "gray" | "blue" | "green";
export const store = proxy<{ pointCount: number; background: BackgroundColor }>(
  { pointCount: 0, background: "gray" }
);

export default class MySketch extends P5Sketch {
  points: { x: number; y: number }[] = [];

  setup(p: P5): void {
    p.strokeWeight(10);
  }

  draw(p: P5): void {
    p.background(store.background);

    if (p.mouseIsPressed) {
      this.points.push({ x: p.mouseX, y: p.mouseY });
      store.pointCount = this.points.length;
    }

    for (let i = 1; i < this.points.length; i++) {
      let { x: px, y: py } = this.points[i - 1];
      let { x, y } = this.points[i];
      p.line(px, py, x, y);
    }
  }

  mousePressed = () => {
    this.points = [];
    store.pointCount = this.points.length;
  };
}
