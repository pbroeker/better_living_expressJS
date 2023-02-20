import express, { Express } from "express";
import * as dotenv from "dotenv";
import passport from "passport";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import bodyParser from "body-parser";
import { main } from "./database/mongo.db";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {
  livingAreaRouter,
  userRouter,
  authRouter,
} from "./routes";
import morgan from "morgan";
import { initStrategy } from "./strategies/jwt.strategy";
import { swaggerOptions } from "./swaggerui/swagger";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL as string;

// use middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(passport.initialize());
initStrategy();
main(DB_URL);

// user routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/area", livingAreaRouter);

const specs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
