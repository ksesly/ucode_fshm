// const Model = require('./model');
// const express = require('express');
// // const fs = require('fs');

// const app = express();

// const host = 'localhost';
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, resp) => {
//     resp.sendFile(__dirname + '/public/reg.html')
// });

// app.use(express.static(__dirname + '/public'));

// app.listen(PORT, () => {
//     console.log(`Server start on http://${host}:${PORT}`);
// });


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pool = require("./db"); // Assuming you have your MySQL pool set up

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request to register a user
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Insert user data into the database
        const [result] = await pool.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, password]
        );

        if (result.affectedRows === 1) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: "Registration failed." });
        }
    } catch (error) {
        console.error("Error:", error);
        res.json({ success: false, message: "Registration failed." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
