import robot from "robotjs";
import { IMouse } from "../navigation/mouse.interface";
import {
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
} from "../navigation/mouseCommands";

export const drawCircle = (mouse: IMouse, radius: number) => {
  robot.mouseToggle("down", "left");
  let startX = mouse.x - radius;
  let startY = mouse.y;

  for (let i = 0.0; i < Math.PI * 2.0; i += 0.01) {
    let x = startX + radius * Math.cos(i);
    let y = startY + radius * Math.sin(i);

    robot.moveMouse(x, y);
  }
  robot.mouseToggle("up", "left");
};

export const drawSquare = (mouse: IMouse, width: number) => {
  robot.mouseToggle("down", "left");
  mouseRight(mouse, width);
  mouse = robot.getMousePos();
  mouseDown(mouse, width);
  mouse = robot.getMousePos();

  mouseLeft(mouse, width);
  mouse = robot.getMousePos();

  mouseUp(mouse, width);
  robot.mouseToggle("up", "left");
};

export const drawRectangle = (mouse: IMouse, width: number, length: number) => {
  robot.mouseToggle("down", "left");
  mouseRight(mouse, width);
  mouse = robot.getMousePos();

  mouseDown(mouse, length);
  mouse = robot.getMousePos();

  mouseLeft(mouse, width);
  mouse = robot.getMousePos();

  mouseUp(mouse, length);
  robot.mouseToggle("up", "left");
};
