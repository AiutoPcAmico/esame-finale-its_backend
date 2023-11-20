import { generateAccessToken } from "../router/authMiddleware.js";
import { getUsers } from "./usersApi.js";

async function apiPostLogin(req, res) {
  console.log("\n\n[POST] - Login user");

  //importing users from array always updated
  const users = await getUsers();
  console.log(req.body);

  if (!req.body?.username || !req.body?.password) {
    res
      .status(400)
      .send({ data: "Username or password not provided!", error: true });
  } else {
    try {
      //simple login. I'll don't use in production mode!
      var user = users.find((single) => {
        return single.username === req.body?.username;
      });

      if (user === undefined) {
        res.status(404).send({ data: "User not found!", error: true });
      } else {
        //if I found the user
        if (
          user.username === req.body.username &&
          user.password === req.body.password
        ) {
          //it's correct, I can authorize the user!
          console.log("New login for user " + user.username);
          const response = await generateAccessToken(
            user.username,
            user.password
          );

          console.log("qui");
          res
            .status(response.status)
            .send({ data: response.data, error: response.error });
        } else {
          res
            .status(403)
            .send({ data: "Username or password not correct!", error: true });
        }
      }
    } catch (e) {
      res.status(500).send({ data: e, error: true });
      return 0;
    }
  }
}

export { apiPostLogin };
