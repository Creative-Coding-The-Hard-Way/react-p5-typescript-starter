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
    p.stroke(255, 255, 255, 15);
  }

  draw(p: P5): void {
    p.background(0, 0, 0, 2);

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

  canvasResized = (p: P5, w: number, h: number) => {
    p.background(2);
  };

  mousePressed = (_p: P5) => {
    this.points = [];
    store.pointCount = this.points.length;
  };
}
