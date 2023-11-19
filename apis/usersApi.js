import users from "../data/users.json" assert { type: "json" };

console.log("Setting users json at startup...");
var usersArray = users;

async function apiPutUser(req, res) {
  console.log("\n[PUT] Adding a user");
  if (!req.body?.username || !req.body?.password || !req.body?.email) {
    res
      .status(400)
      .send("Please, provide username, password and email address!");
  } else {
    try {
      //if I have all required elements
      usersArray.push({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });

      res.status(201).send({ data: "Users added!", error: false });
    } catch (error) {
      res
        .status(500)
        .send({ data: "Strange situation, plase retry!", error: true });
    }
  }
}

async function getUsers() {
  return usersArray;
}

export { getUsers, apiPutUser };
