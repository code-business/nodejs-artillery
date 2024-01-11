const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

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
  res.json({
    status: "success",
    message: "Hello, World!",
  });
});

app.get("/api/users", (req, res) => {
  res.json({
    data: users,
    status: "success",
  });
});

app.post("/api/users", (req, res) => {
  const newUser = req.body.user;

  if (newUser && newUser.name && newUser.email) {
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
  } else {
    res.status(400).json({ error: "Invalid user data" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
