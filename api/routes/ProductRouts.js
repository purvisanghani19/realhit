const express = require("express");
const app = express();
const router = express.Router();
const {
  GetProductdata,
  PostProductdata,
} = require("../controllers/ProductController");
const upload = require("../middleware/multer");

router.route("/upload").post(upload,PostProductdata);
router.route("/get").get(GetProductdata);

module.exports = router;
