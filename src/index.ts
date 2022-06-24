import Jimp from "jimp";

import robot from "robotjs";
import fs from "fs";
import { WebSocketServer } from "ws";
import { httpServer } from "./http_server";
import {
  drawCircle,
  drawRectangle,
  drawSquare,
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
} from "./navigation/mouseComand";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
    let args = data.toString().split(" ");
    let command = args[0];
    let shift = args[1];
    let shift2 = args[2];
    switch (command) {
      case "mouse_up":
        mouseUp(shift);
        break;
      case "mouse_down":
        mouseDown(shift);
        break;
      case "mouse_left":
        mouseLeft(shift);
        break;
      case "mouse_right":
        mouseRight(shift);
        break;
      case "draw_circle":
        drawCircle(shift);
        break;
      case "mouse_position":
        let mouse = robot.getMousePos();
        ws.send(`mouse_position ${mouse.x} px,${mouse.y} px`);
        break;
      case "draw_square":
        drawSquare(shift);
        break;
      case "draw_rectangle":
        drawRectangle(shift, shift2);
        break;
      case "prnt_scrn":
        let mouse1 = robot.getMousePos();
        let img = robot.screen.capture(mouse1.x, mouse1.y, 200, 200);
        new Jimp({ data: img.image, width: 200, height: 200 }, (err, image) => {
          image.write("file.png");
        });
        ws.send(`prnt_scrn ${base64_encode("file.png")}`);
        break;
    }
  });
});

httpServer.listen(HTTP_PORT);
function base64_encode(file) {
  return fs.readFileSync(file, "base64");
}
