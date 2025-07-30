import express from "express";
import { createEvent, getAllEvents , deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

// POST /api/events  admin create the events 
router.post("/", createEvent);

// GET /api/events
router.get("/", getAllEvents);

// DELETE route for deleting event by ID
router.delete("/:id", deleteEvent);

export default router;
