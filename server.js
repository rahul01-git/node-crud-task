const http = require("http");
const express = require("express");

var cors = require("cors");
const itemsRouter = require("./routes/items");

const app = express();
app.use(express.json());

app.use(cors({origin: "https://localhost:8100"}));
app.use("/items",itemsRouter);


app.use("/", function (req, res) {
  res.send("Home Route");
});

http.createServer(app).listen(3000);
console.debug("Server listening on port 3000");