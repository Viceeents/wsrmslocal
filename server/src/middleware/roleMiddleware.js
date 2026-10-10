export default function roleMiddleware(...roles) {
  return (req, res, next) =>
    roles.includes(req.user.role)
      ? next()
      : res.status(403).json({
          message: "Your role does not have permission to perform this action.",
        });
}
