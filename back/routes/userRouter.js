import {Router} from "express";

import userAPIController from "../controllers/apiControllers/userAPIController.js";


const router  = Router();


router.post("/",userAPIController.create);
router.get("/remove/:id",userAPIController.remove);
router.post("/update/:id",userAPIController.update);
router.post("/register",userAPIController.register);
router.post("/login",userAPIController.login);




router.get("/",userAPIController.getAll);
router.get("/find/:id",userAPIController.getById);


export default router;