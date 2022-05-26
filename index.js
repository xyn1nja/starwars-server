import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { infoRoute } from "./routes/information.js";
dotenv.config();

const app = express();

app.use(cors());

app.use("/", infoRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server ready at port ${process.env.PORT || 5000}`)
);

//use docker to resolve versioning issues
