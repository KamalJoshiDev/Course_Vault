const express = require("express");
const { Fetch_Data} = require("../Controller/Study_Materials.controller");

const Router = express.Router();


Router.route("/fetch").get(Fetch_Data);

module.exports = Router;