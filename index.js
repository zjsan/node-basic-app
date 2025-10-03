//importing modules
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000; //application port

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//database connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "testdb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Routes
// API to check connection witht backend
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world!" });
});

// API to register a user
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  con.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json({ message: "User registered successfully!" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
