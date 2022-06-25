import robot from "robotjs";
import { drawCircle, drawRectangle, drawSquare } from "../drawing/drawCommands";
import {
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
} from "../navigation/mouseCommands";
import { printScreen } from "../screen/screenCommand";

export const waitForCommandInput = (ws, data) => {
  console.log("received: %s", data);
  let args = data.toString().split(" ");
  let command = args[0];
  let shift = args[1];
  let shift2 = args[2];
  let mouse = robot.getMousePos();
  switch (command) {
    case "mouse_up": {
      mouseUp(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "mouse_down": {
      mouseDown(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "mouse_left": {
      mouseLeft(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "mouse_right": {
      mouseRight(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "draw_circle": {
      drawCircle(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "mouse_position": {
      ws.send(`mouse_position ${mouse.x}px,${mouse.y}px \0`);
      break;
    }
    case "draw_square": {
      drawSquare(mouse, shift);
      ws.send(`${command} \0`);
      break;
    }
    case "draw_rectangle": {
      drawRectangle(mouse, shift, shift2);
      ws.send(`${command} \0`);
      break;
    }
    case "prnt_scrn": {
      ws.send(`prnt_scrn ${printScreen(mouse)} \0`);
      break;
    }
    default: {
      ws.send(`Oops something wrong \0`);
    }
  }
};
