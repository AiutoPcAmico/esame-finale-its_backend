import markets from "../data/markets.json" assert { type: "json" };

async function apiGetAllMarkets(req, res) {
  console.log("\n[GET] Getting all markets");
  const retrieved = {
    data: markets,
    error: false,
    status: 200,
  };

  res.status(retrieved.status).send(retrieved);
}

export { apiGetAllMarkets };
