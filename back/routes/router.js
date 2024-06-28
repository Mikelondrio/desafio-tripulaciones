import { Router } from "express";

const router  =  userRouter();



import userRouter from "./userRouter.js";



router.use("/user", userRouter);






export default router;