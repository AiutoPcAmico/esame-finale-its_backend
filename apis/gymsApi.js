import gyms from "../data/gyms.json" assert { type: "json" };

async function apiGetAllGyms(req, res) {
  console.log("\n[GET] Getting all gyms");
  const retrieved = {
    data: gyms,
    error: false,
    status: 200,
  };

  res.status(retrieved.status).send(retrieved);
}

function apiGetGymDetails(idGym) {
  console.log("Search id " + idGym);
  var details = gyms.find((single) => {
    return single.id === idGym;
  });
  return details;
}

export { apiGetAllGyms, apiGetGymDetails };
