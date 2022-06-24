import robot from "robotjs";

export const mouseUp = (position) => {
  let mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x, mouse.y - position);
};

export const mouseDown = (position) => {
  let mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x, mouse.y - position * -1);
};

export const mouseLeft = (position) => {
  let mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x - position, mouse.y);
};

export const mouseRight = (position) => {
  let mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
  robot.moveMouse(mouse.x - position * -1, mouse.y);
};

export const drawCircle = (radius) => {
  let mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
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

export const drawSquare = (position) => {
  robot.mouseToggle("down", "left");
  mouseRight(position);
  mouseDown(position);
  mouseLeft(position);
  mouseUp(position);
  robot.mouseToggle("up", "left");
};

export const drawRectangle = (width, length) => {
  robot.mouseToggle("down", "left");
  mouseRight(width);
  mouseDown(length);
  mouseLeft(width);
  mouseUp(length);
  robot.mouseToggle("up", "left");
};
