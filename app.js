require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const connectDB = require("./db");
const app = express();
const route = require('./routes/index')

app.use(express.json());
connectDB();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("common"));
app.use('/api/v1', route)

app.listen(process.env.PORT, () => {
    console.log(`Server Running ${process.env.PORT}`);
});

module.exports = app;