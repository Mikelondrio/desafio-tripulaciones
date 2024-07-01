import {Router} from "express";

import scanerAPIController from "../controllers/apiControllers/scanerAPIController.js";


const router  = Router();


router.post("/",scanerAPIController.create);
router.post("/find",scanerAPIController.getByProperty);
router.post("/remove/:id",scanerAPIController.remove);
router.post("/update/:id",scanerAPIController.update);


router.get("/",scanerAPIController.getAll);


export default router;