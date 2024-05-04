const { getProducts, saveProducts } = require("../controller/product.controller");
const express = require("express");
const router = express.Router();


//product routes

router.get("/getproduct",getProducts)

router.get("/saveProduct",saveProducts)

module.exports = router;