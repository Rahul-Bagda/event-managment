import Event from "../models/Event.js";

export const showRegistrationForm = async (req, res) => {
  try {
    const events = await Event.find();
    res.render("register", { events });
  } catch (error) {
    console.error("Error loading register page:", error);
    res.status(500).send("Error loading form.");
  }
};
