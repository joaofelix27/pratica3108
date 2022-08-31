import { Router } from "express";
import { postBattle } from "../controllers/battleController";

const rankingRouter = Router();

rankingRouter.post("/battle", postBattle );

export default rankingRouter;
