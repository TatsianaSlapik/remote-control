import { WebSocketServer } from "ws";
import { httpServer } from "./http_server";
import { waitForCommandInput } from "./utils/utils";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);

    waitForCommandInput(ws, data);
  });
});

httpServer.listen(HTTP_PORT);
