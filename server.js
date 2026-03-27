const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const PORT = process.env.PORT;
const connection = require("./config/db");
connection();
app.use(express.json());
const UserRouter = require("./routes/UserRouter");
const productRouter=require("./routes/productRouter");
app.use("/api", UserRouter);
app.use("/api",productRouter);
app.listen(PORT, () => {
  console.log(`server running on port :${PORT}`);
});
