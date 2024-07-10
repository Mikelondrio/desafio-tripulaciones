import { Router } from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router  =  Router();



import userRouter from "./userRouter.js";
import scanerRouter from "./scanerRouter.js";



router.use("/user", userRouter);
router.use("/scaner", isAuthenticated, scanerRouter);






export default router;