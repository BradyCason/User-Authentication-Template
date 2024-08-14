const express = require("express");

const sampleRouter = require("./routes/SampleRouter");
const authRouter = require("./routes/authRouter");

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", authRouter);
app.use("/sample", sampleRouter)

// User authentication logic


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));