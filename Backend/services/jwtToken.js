import jwt from "jsonwebtoken";
function jwtTokenGnerator(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
}

export default jwtTokenGnerator;
