import {Router} from "express";
import visit from "../controllers/visit.js";
import {isAuthenticated} from "../services/security.js";

const router = Router();

router.get("/:id?",isAuthenticated(), visit.get);
router.post("/",isAuthenticated(), visit.create);
router.put("/:id",isAuthenticated(), visit.update);
router.delete("/:id",isAuthenticated(), visit.remove);

export default router;