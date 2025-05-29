const StudyModel = require("../Models/Study Materials.Model");
const AsyncHandler = require("../Utils/AsyncHandler");
const ApiResponse = require("../Utils/ApiResponse");
const ApiError = require("../Utils/ApiError");



const Fetch_Data = AsyncHandler(async (req, res) => {
  try {
      const FindAllData = await StudyModel.find();
      return res.status(200).json({
          status: 202,
          message: "Event Found",
          data: FindAllData
      })
  } catch (error) {
      throw new ApiError("Invalid DB Credentials !", 404);
  }

})




module.exports = { Fetch_Data}