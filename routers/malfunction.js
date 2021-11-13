import {Router} from "express";
import malfunction from "../controllers/malfunction.js";
import {isAuthenticated} from "../services/security.js";

const router = Router();

router.get("/:id?",isAuthenticated(), malfunction.get);
router.post("/",isAuthenticated(), malfunction.create);
router.put("/:id",isAuthenticated(), malfunction.update);
router.delete("/:id",isAuthenticated(), malfunction.remove);

export default router;