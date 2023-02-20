import express, { Express } from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import bodyParser from "body-parser";
import { main } from "./database/mongo.db";
import morgan from "morgan";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL as string;
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
main(DB_URL);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
