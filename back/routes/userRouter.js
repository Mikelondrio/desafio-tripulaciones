import {Router} from "express";

import userAPIController from "../controllers/apiControllers/userAPIController.js";


const router  = Router();


router.post("/",userAPIController.create);
router.post("/find",userAPIController.getByProperty);
router.post("/remove/:id",userAPIController.remove);
router.post("/update/:id",userAPIController.update);




router.get("/",userAPIController.getAll);


export default router;