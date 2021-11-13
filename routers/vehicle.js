import {Router} from "express";
import vehicle from "../controllers/vehicle.js";
import {isAuthenticated} from "../services/security.js";

const router = Router();

router.get("/:id?",isAuthenticated(), vehicle.get);
router.post("/",isAuthenticated(), vehicle.create);
router.post("/:id/:receiver",isAuthenticated(), vehicle.transfer);
router.put(":/id",isAuthenticated(), vehicle.update);
router.delete("/:id",isAuthenticated(), vehicle.remove);

export default router;