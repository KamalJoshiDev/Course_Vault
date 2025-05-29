const MongoDB = require("mongoose");
const User = new MongoDB.Schema(
    {
        Uid: {
            type: String,
            required: true,
        },
        Username: {
            type: String,
            required: true,
            trim: true,
        },
        Email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
        }
    },
    { timestamps: true }
);

module.exports = MongoDB.model("user", User);