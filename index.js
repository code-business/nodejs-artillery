const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World!",
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
