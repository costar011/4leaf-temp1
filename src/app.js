import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.get("/");

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
