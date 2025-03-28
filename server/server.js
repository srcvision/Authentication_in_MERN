const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User"); // Import User model
const cors = require("cors")
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Employees")
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// ==================== CRUD Operations ====================

// 🔹 **1. Create a User (POST)**
app.post("/register", (req, res) => {
    try {
        User.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
        res.status(201).json({ message: "User created successfully!"});
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});


app.post("/login", (req, res) => {
    try {
        const {email,password} = req.body;
        User.findOne({email : email})
        .then(user => {
            if(user){
                if(user.password === password){
                    res.json("Success")
               }else{
                res.json("The Password is inccorect")
               }
            }else{
                res.json("No Recod Exitsed!!!")
            }
        })
        .catch(err => res.json(err))
        res.status(201).json({ message: "User Logging successfully!"});
    } catch (error) {
        res.status(500).json({ error: "Error Logging user" });
    }
});

// // 🔹 **2. Get All Users (GET)**
// app.get("/register", async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching users" });
//     }
// });


// Start the Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
