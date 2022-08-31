import { Router } from "express";
import battleRouter from "./battleRouter";
import rankingRouter from "./rankingRouter";

const router = Router();

router.use(battleRouter);
router.use(rankingRouter);



export default router;
