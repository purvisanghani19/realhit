const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|png|jpg|gif/;
    const mimeType = fileType.test(file.mimetype.toLowerCase());
    const extname = fileType.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Please upload only JPEG, PNG, JPG or GIF images");
  },
}).single("Img");

module.exports = upload;
