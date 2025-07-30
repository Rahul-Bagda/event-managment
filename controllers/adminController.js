// controllers/adminController.js
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).send("Invalid credentials");

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    // Save admin in session
    req.session.admin = { id: admin._id, email: admin.email };

    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
