import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();


// 1️⃣ POST – Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Password encryption
        const hashPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        res.status(201).json({
            message: "Signup successful",
            user,
        });

    } catch (error) {
        console.log("Signup Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


// 2️⃣ POST – Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user,
        });

    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


// Export router
export default router;
