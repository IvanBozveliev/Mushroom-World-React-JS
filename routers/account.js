import {Router} from "express";
import {isAuthenticated} from "../services/security.js";
import validations from "../validations/user/index.js";

import account from "../controllers/account.js";
import {validateModel} from "../validations/common.js";

const router = Router();

router.post("/register", ...validations.register, validateModel, account.register);
router.post("/login", ...validations.login, validateModel, account.login);
router.post("/logout", isAuthenticated(), account.logout);
router.post("/remove", isAuthenticated(), account.removePost);
router.delete("/remove", isAuthenticated(), ...validations.remove, validateModel, account.removeDel);

export default router;