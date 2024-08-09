const ReviewModel = require("../models/ReviewModel");
const nodemailer = require("nodemailer");
const path = require("path");

const UserReview = async (req, res) => {
  const { userName, email, title, review, productId } = req.body;

  if (!userName || !email || !review || !productId) {
    return res.status(401).json({ result: "please fill all fields" });
  }
  try {
    const Reviewdb = new ReviewModel({
      userName,
      email,
      title,
      review,
      productId,
    });
    const newReview = await Reviewdb.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your review!",

      html: `
    <p>Hi there, ${userName}!</p>
    <p>Thank you for your review on product ${productId}.</p>
    <p>Your feedback helps us improve our services.</p>
    <img src="cid:unique@cid" alt="Embedded Image" />
    <p>Best regards,<br/>Realhit</p>
  `,

      // text: `Hi there! ${userName}\n\nThank you for your review on product ${productId}.\n\nYour feedback helps us improve our services.\n\nBest regards,\nRealhit`,
      attachments: [
        {
          filename: "cat.png",
          path: path.join(__dirname, "../svg/cat.png"),
          cid: "unique@cid",
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Review submitted and email sent.",
      result: newReview,
    });
  } catch (error) {
    res.status(401).json(error.message);
    console.log("review save error", error);
  }
};

module.exports = UserReview;
