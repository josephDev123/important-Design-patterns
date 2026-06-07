import express from "express";
import dotenv from "dotenv";
import { Route } from "./routes";
import { ObserverRoute } from "./features/ObserverPattern/route";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/home", (req, res) => {
  res.send("home");
});
app.use("/api", Route);
app.use("/api", ObserverRoute);

app.listen(process.env.PORT, () =>
  console.log(`Running on server on port ${process.env.PORT}`),
);
