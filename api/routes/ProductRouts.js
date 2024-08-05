const express = require("express");

const router = express.Router();
const {
  GetProductdata,
  PostProductdata,
  GetsingleProduct,
} = require("../controllers/ProductController");
const upload = require("../middleware/multer");

router.route("/upload").post(upload, PostProductdata);
router.route("/get").get(GetProductdata);
router.route("/get-single-product/:id").get(GetsingleProduct);

module.exports = router;
