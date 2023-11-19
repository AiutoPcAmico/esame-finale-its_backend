import province from "../data/province.json" assert { type: "json" };

async function apiGetAllProvince(req, res) {
  console.log("\n[GET] Getting all provinces");
  const retrieved = {
    data: province,
    error: false,
    status: 200,
  };

  res.status(retrieved.status).send(retrieved);
}

export { apiGetAllProvince };
