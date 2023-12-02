import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";

import { AppDataSource } from "./data-source";
import morgan from "morgan";
import cors from "cors";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

const corsWhiteList = process.env.CORS_WHITE_LIST;
if (corsWhiteList) {
  app.use(
    cors({
      origin: JSON.parse(corsWhiteList),
      credentials: true,
    })
  );
}

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ Message: "Hello World!" });
});

router.use("/users", userRoutes);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
