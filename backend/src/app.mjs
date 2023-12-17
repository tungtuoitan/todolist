import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import os from "os";
import bodyParser from "body-parser";
import fs from 'fs'

// tạo 1 đối tượng ứng dụng express
const app = express();

// xử lí  HTTP request trước khi được chuyển đến các route
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cấu hình CORS
app.use(cors());
const port = 80;

// kết nối DB
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.log("ERROR: kết nối DB");
  }
});

// route get-data
app.get("/get-data", (req, res) => {
  const sql = `SELECT * FROM todolist`;
  db.all(sql, (err, rows) => {
    if (err) {
      console.log("ERROR: get-data", err.message);
    } else {
      res.send(rows);
    }
  });
});

// Route add-item
app.post("/add-item", (req, res) => {
  const sql = `INSERT INTO todolist ( content ) VALUES ('${req.body.value}')`;
  db.run(sql, function (err) {
    if (err) {
      console.error("ERROR: add-item", err);
    } else {
      res.send("add thành công");
    }
  });
});

// route delete-item
app.post("/delete-item", (req, res) => {
  const sql = `DELETE FROM todolist WHERE id = ${req.body.id}`;
  db.run(sql, (err) => {
    if (err) {
      console.log("ERROR: delete", err, req.body);
    } else {
      res.send("delete thành công");
    }
  });
});

// route change-data
app.post("/change-data", (req, res) => {
  console.log(req.body);
  const sql = `UPDATE todolist SET content = '${req.body.content}'
  WHERE id = ${req.body.id}`;
  db.run(sql,(err)=>{
    if(err){
      console.error(err.message)
    }else{
      res.send('change-data thành công')
    }
  })
})




// khởi động HTTP server + HTTP server lắng nge trên 80
app.listen(port, () => {});
