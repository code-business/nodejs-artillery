const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for messages from the client
  socket.on("message", (msg) => {
    console.log(`Message from client: ${msg}`);

    // Broadcast the message to all connected clients
    io.emit("message", msg);
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello, World!",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
