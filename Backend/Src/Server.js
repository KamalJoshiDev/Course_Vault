const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Utils
const ConnectDB = require("./Config/MongoDb")
const appRoutes = require('./Routes/Router.Routes.js')

dotenv.config();

const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server Is Runnning"
    });
});

ConnectDB().then(() => {

    app.use("/api/v1", appRoutes);

    const PORT = process.env.PORT || 1500;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });


})
    .catch((error) => {
        console.log(error);
    });

