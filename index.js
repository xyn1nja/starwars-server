import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server ready at port ${process.env.PORT || 5000}`)
);
