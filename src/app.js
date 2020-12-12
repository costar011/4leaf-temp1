import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.get("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
