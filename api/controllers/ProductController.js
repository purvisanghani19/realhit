const productmodel = require("../models/ProductModel");

const PostProductdata = async (req, res) => {

  console.log("Uploaded file info:------------", req.file);
  console.log("Form data:", req.body);
    try {
      const data = new productmodel(req.body);
      const newdata = await data.save();
      res.status(200).json({ result: newdata });
    } catch (error) {
      res.status(400).json({ result: error });
      console.log(error);
    }
};

const GetProductdata = async (req, res) => {
  try {
    const getdata = await productmodel.find({});
    if (getdata.length > 0) {
      res.status(200).json({ result: getdata });
    } else {
      res.status(400).json({ result: "No result Found !" });
    }
  } catch (error) {
    res.status(400).json({ result: error });
  }
};

module.exports = { GetProductdata, PostProductdata };
