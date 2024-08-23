const productmodel = require("../models/ProductModel");

const PostProductdata = async (req, res) => {
  // console.log("Uploaded file info:------------", req.file);
  // console.log("Form data:", req.body);
  try {
    const size = req.body.size ? req.body.size.split(",") : undefined;
    const colorr = req.body.color ? req.body.color.split(",") : undefined;

    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const { name, price, sale, category } = req.body;
    let info = {
      name,
      price,
      color: colorr,
      Img: `/uploads/${req.file.filename}`,
      sale,
      category,
      size: size,
    };
    const data = new productmodel(info);
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
    console.log("Products found:", getdata);
    if (getdata.length > 0) {
      res.status(200).json({ result: getdata });
    } else {
      res.status(400).json({ result: "No result Found !" });
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ result: "Internal server error" });
  }
};

const GetsingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await productmodel.findById(id);
    // console.log("data", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("error", error);
    res.send({ result: { error } });
  }
};

module.exports = { GetProductdata, PostProductdata, GetsingleProduct };
