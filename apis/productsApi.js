import products from "../data/products.json" assert { type: "json" };

async function apiGetAllProducts(req, res) {
  console.log("\n[GET] Getting all products in the market");
  const retrieved = {
    data: products,
    error: false,
    status: 200,
  };

  res.status(retrieved.status).send(retrieved);
}

export { apiGetAllProducts };
