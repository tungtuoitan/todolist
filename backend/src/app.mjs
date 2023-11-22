import express from "express";

// tạo 1 đối tượng ứng dụng express
const app = express();
const port = 6000;

// định nghĩa 1 route (path + callback)
app.get("/add", (req, res) => {
  res.send("added one ");
});

// khởi động HTTP server + HTTP server lắng nge trên 3000
app.listen(port, () => {
  console.log("Server runned on 6000");
});
