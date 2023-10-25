import express, { Request, Response } from "express";
import getSettings from "./utils/settings";
import path from "path";
import { log } from "./utils/log";
import { auth } from "./middleware/auth";

export const app = express();
app.use(auth);

// static content
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// express pages / routes / controllers go here
app.get("/", (req: Request, res: Response) => res.render("index"));

// start
const port = getSettings("PORT", 3000);
app.listen(port, () => log(`Running at http://localhost:${port}/?apiKey=${getSettings("WEB_INTEGRATIONS_API_KEY")}`));
