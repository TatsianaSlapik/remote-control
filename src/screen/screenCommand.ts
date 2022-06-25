import fs from "fs";
import Jimp from "jimp";
import robot from "robotjs";
import { IMouse } from "../navigation/mouse.interface";

function base64_encode(file) {
  return fs.readFileSync(file, "base64");
}

export const printScreen = (mouse: IMouse) => {
  let img = robot.screen.capture(mouse.x, mouse.y, 200, 200);
  new Jimp({ data: img.image, width: 200, height: 200 }, (err, image) => {
    image.write("file.png");
  });

  let screen = base64_encode("file.png");

  return screen;
};
