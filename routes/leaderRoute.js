import  express  from "express";
import { currentWeekLeaderBoard, lastWeekLeaderBoard, userRank } from "../controllers/leaderController.js";


const router = express.Router();

router.get('/current',currentWeekLeaderBoard);
router.get('/last',lastWeekLeaderBoard);
router.get('/rank',userRank);

export default router