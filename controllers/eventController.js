import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.send(`
      <script>
        alert('Event created successfully!');
        window.location.href = '/admin/dashboard'; // Redirect after alert
      </script>
    `);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create event", error: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    // console.log("EVENTS FOUND:", events);
     res.render("events", { events }); 
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch events" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.send(`
      <script>
        alert('Event deleted successfully!');
        window.location.href = '/admin/events';
      </script>
    `);
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete event", error: err.message });
  }
};