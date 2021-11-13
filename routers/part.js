import {Router} from "express";
import part from "../controllers/part.js";
import {isAuthenticated} from "../services/security.js";
import validations from "../validations/part/index.js";
import {userRoles} from "../models/constants/user.js";
import {validateModel} from "../validations/common.js";

const router = Router();

router.get("/:id?",
    isAuthenticated(),
    part.get);

router.post("/",
    isAuthenticated([userRoles.support, userRoles.admin]),
    ...validations.create,
    validateModel,
    part.create);

router.put("/:id",
    isAuthenticated([userRoles.support, userRoles.admin]),
    ...validations.update,
    validateModel,
    part.update);

router.delete("/:id",
    isAuthenticated([userRoles.support, userRoles.admin]),
    ...validations.remove,
    validateModel,
    part.remove);

export default router;