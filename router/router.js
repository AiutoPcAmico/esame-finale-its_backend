import express from "express";
import { apiPostLogin } from "../apis/loginApi.js";
import { apiGetAllProvince } from "../apis/provinceApi.js";
import { apiPutUser } from "../apis/usersApi.js";
import { authenticateToken } from "./authMiddleware.js";
import { apiGetAllMarkets } from "../apis/marketsApi.js";
import { apiGetAllProducts } from "../apis/productsApi.js";

const router = express.Router();

//TO PROTECT AN API WITH LOGIN, use authenticateToken function!
// example router.get("/myPizze", authenticateToken, apiGetMyPizze)

/*    ----------------------
 *          EXAMPLE ROUTES
 *     ----------------------
 */
router.get("/", function (req, res) {
  res.send("Hello World from " + process.env.APPLICATIONNAME);
});

/*    ----------------------
 *          USERS ROUTES
 *     ----------------------
 */
router.post("/login", apiPostLogin);
router.put("/users/add", apiPutUser);

/*    ----------------------
 *       GENERAL DATA ROUTES
 *     ----------------------
 */
router.get("/province/getall", authenticateToken, apiGetAllProvince);
router.get("/markets/getAll", authenticateToken, apiGetAllMarkets);
router.get("/products/getAll", authenticateToken, apiGetAllProducts);

export { router };