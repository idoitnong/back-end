import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";

import { AppDataSource } from "./data-source";

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

app.get("/", (req: Request, res: Response) => {
  res.json({ Message: "Hello World!" });
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
