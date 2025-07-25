const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res
        .status(401)
        .json({ msg: "Authorization header missing or malformed token" });
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    const decodedToken = jwt.verify(token, process.env.secret);
    console.log(decodedToken);
    req.user = { id: decodedToken.id };
    console.log(req.user.id);

    next();
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
}

module.exports = verifyToken;
