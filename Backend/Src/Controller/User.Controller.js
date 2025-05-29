const UserModel = require("../Models/User.Model")
const AsyncHandler = require("../Utils/AsyncHandler");
const ApiResponse = require("../Utils/ApiResponse");
const ApiError = require("../Utils/ApiError");

const Register_User = AsyncHandler(async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        const existingUser = await UserModel.findOne({ Email });
        if (existingUser) {
            throw new ApiError("Email is already registered", 409);
        }

        const newUser = await UserModel.create({
            Username,
            Email,
            Password,
        });

        res.redirect("http://localhost:5175");
    } catch (error) {
        throw new ApiError("Invalid User Credentials !", 404);
    }

})

module.exports = { Register_User }