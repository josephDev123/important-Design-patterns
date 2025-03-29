import express from "express";
import dotenv from "dotenv";
import { Route } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/home", (req, res) => {
  res.send("home");
});
app.use("/api", Route);

app.listen(process.env.PORT, () =>
  console.log(`Running on server on port ${process.env.PORT}`)
);
