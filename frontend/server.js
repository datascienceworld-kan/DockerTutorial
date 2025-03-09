const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5000"
}))

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Redirect root ("/") to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
