import jwt from "jsonwebtoken";

async function generateAccessToken(username, password) {
  console.log("pippo");
  return {
    data: jwt.sign({ username: username }, process.env.SECRETTOKENJWT, {
      expiresIn: "8h",
    }),

    status: 200,
    error: false,
  };
}

function authenticateToken(req, res, next) {
  console.log(
    "\n\n[CHECK] - Requested path " + req.route.path + " verifying token JWT"
  );
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.error("[ERR] No token provided!");
    return res.status(403).send({ data: "No token provided!", error: true });
  } else {
    jwt.verify(token, process.env.SECRETTOKENJWT, (err, user) => {
      if (err) {
        console.error("[ERR] Token provided not valid!");
        return res.status(401).send({
          data: "Token not valid! Please, go to the login page!",
          error: true,
        });
      } else {
        console.log("[OK] - Token Validated!");
        req.user = user;
        next();
      }
    });
  }
}

export { generateAccessToken, authenticateToken };
