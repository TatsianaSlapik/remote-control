import robot from "robotjs";
import { IMouse } from "./mouse.interface";

export const mouseUp = (mouse: IMouse, shift: number) => {
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x, mouse.y - shift);
};

export const mouseDown = (mouse: IMouse, shift: number) => {
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x, mouse.y - shift * -1);
};

export const mouseLeft = (mouse: IMouse, shift: number) => {
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x - shift, mouse.y);
};

export const mouseRight = (mouse: IMouse, shift: number) => {
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x - shift * -1, mouse.y);
};
