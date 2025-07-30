import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import methodOverride from "method-override"; // ✅ You forgot to import this
import connectDB from "./config/db.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import { isAdminLoggedIn } from "./middleware/auth.js";
// import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Required to use __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Connect to MongoDB
connectDB();

// ✅ Session setup
app.use(
  session({
    secret: "your_super_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method')); // ✅ method override for DELETE form

// ✅ Routes (GET)
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// ✅ Admin Events View Page
import Event from "./models/Event.js";
app.get("/admin/events", isAdminLoggedIn, async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.render("admin-events.ejs", { events });
});

// ✅ Admin Dashboard
app.get("/admin/dashboard", isAdminLoggedIn, (req, res) => {
  res.render("dashboard.ejs", { admin: req.session.admin });
});

// ✅ Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
});

// ✅ Use Routes
app.use("/admin", adminRoutes);

app.use("/events", eventRoutes); // used to render public events page
app.use("/register", registrationRoutes); // this now handles /register/form
app.use("/api/register", registrationRoutes); // this still handles POST
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes); // used to create/delete events

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
