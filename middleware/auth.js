// middleware/auth.js
export function isAdminLoggedIn(req, res, next) {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect("/login");
}
