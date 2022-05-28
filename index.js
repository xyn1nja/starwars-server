// import necessary packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// inport routes
import { infoRoute } from "./routes/information.js";

// configure dotenv
dotenv.config();

// instantiate express app
const app = express();

// enable cors
app.use(cors());

// routes
// in this case, the route is "/information" passed from infoRoute
app.use("/", infoRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});

// start listening to the port and host (in this case it will be localhost)
const server = app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server ready at port ${process.env.PORT || 5000}`)
);

export default server;
