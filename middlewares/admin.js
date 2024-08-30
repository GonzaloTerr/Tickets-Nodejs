export default function admin(req, res, next) {
  // Log para ver el contenido de req.user
  console.log("User Object:", req.user);

  // Verifica que req.user y req.user.role existen
  if (!req.user || !req.user.role) {
    return res.status(401).json({
      message: "Authentication failed, no user or role found",
    });
  }

  // Verifica si el rol del usuario es 'admin'
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access Denied, Don't have permission to perform this action",
    });
  }

  // Si todo está bien, procede al siguiente middleware
  next();
}
  