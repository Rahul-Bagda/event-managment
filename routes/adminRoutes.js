// backend/routes/adminRoutes.js
import express from "express";
import { loginAdmin } from "../controllers/adminController.js";
import Event from "../models/Event.js";
import Registration from "../models/Registration.js";

const router = express.Router();

// POST /api/admin/login
router.post("/login", loginAdmin);


// GET /admin/events/:id - Show event details and registered users
router.get("/events/:id", async (req, res) => {
  try {
    const eventId = req.params.id;

    // Get event info
    const event = await Event.findById(eventId);

    // Get registrations for this event
    const registrations = await Registration.find({ event: eventId });

    res.render("admin-event-details", {
      event,
      registrations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

export default router;
