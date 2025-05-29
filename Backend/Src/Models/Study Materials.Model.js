const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    type: { type: String, required: true, enum: ["Notes", "Videos", "Quizzes", "Assignments"] },
    image: { type: String, required: true },
    link: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
