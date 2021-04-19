import * as express from "express";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!",
      });
    });
    router.get("/welcome", (req, res) => {
      res.json({
        message: "Welcome to node js with typescript",
      });
    });

    this.express.use("/", router);
  }
}

export default new App().express;
