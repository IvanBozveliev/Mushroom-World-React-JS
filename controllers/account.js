import userService from "../services/user.js";
import {signToken, setAuthenticationCookie, deleteAuthenticationCookie} from "../services/security.js";
import {getRemoveModel, getUserTokenModel, getUserViewModel} from "../mappers/user.js";

async function register(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function login(req, res) {
    try {
        const user = await userService.checkUser(req.body);
        const token = await signToken(getUserTokenModel(user));
        setAuthenticationCookie(res, token);
        res.status(200).send(getUserViewModel(user));
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

function logout(req, res) {
    deleteAuthenticationCookie(res);
    res.status(200).send("Log-out successful.");
}

function removePost(req, res) {
    const hash = userService.generateVerificationHash(req.user.id);
    res.status(200).send(hash);
}

async function removeDel(req, res) {
    try {
        const model = getRemoveModel(req.user.id, req.body.verificationHash, req.body.password);
        const user = await userService.deleteUser(model);
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

export default {
    register,
    login,
    logout,
    removePost,
    removeDel
}