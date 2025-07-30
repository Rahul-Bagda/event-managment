import express from "express";
import Registration from "../models/Registration.js";
import { showRegistrationForm } from "../controllers/registrationController.js";

const router = express.Router();

// ⬅️ Move GET /register here
router.get("/form", showRegistrationForm);

// Handle form POST request
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, event } = req.body;

    if (!name || !email || !phone || !event) {
      return res.status(400).send("All fields are required.");
    }

    const newRegistration = new Registration({
      name,
      email,
      phone,
      event,
    });

    await newRegistration.save();

    res.send(`<script>alert("Thank you for registering!"); window.location.href = "/";</script>`);
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).send("Something went wrong. Please try again.");
  }
});

export default router;
