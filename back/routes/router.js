import { Router } from "express";

const router  =  Router();



import userRouter from "./userRouter.js";
import scanerRouter from "./scanerRouter.js";



router.use("/user", userRouter);
router.use("/scaner", scanerRouter);






export default router;