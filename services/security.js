import jwt from "jsonwebtoken";
import {cookieConfigs, tokenConfigs} from "../configs/security.js";

const defaultHasAllRoles = false;

export function isAuthenticated(roles, hasAllRoles = defaultHasAllRoles) {
    if (!roles) {
        return function (req, res, next) {
            if (!req.user) {
                res.status(401).send("Authenticated user is required!");
                return;
            }

            next();
        }
    }

    return function (req, res, next) {
        const isAuthenticatedUser = !!req.user;
        const hasRequiredRoles
            = hasAllRoles
            ? roles.every(role => req.user.roles.contains(role))
            : roles.some(role => req.user.roles.contains(role));

        if (isAuthenticatedUser && hasRequiredRoles) {
            next();
            return;
        }

        res.status(401).send("Insufficient rights!");
    }
}

export function signTokenSync(user) {
    return jwt.sign(user, tokenConfigs.tokenSecret, tokenConfigs.options);
}

export function signToken(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, tokenConfigs.tokenSecret, tokenConfigs.options, (err, token) => {
            if (err) {
                reject(err);
            }

            resolve(token);
        });
    });
}

export function verifyTokenSync(token) {
    return jwt.verify(token, tokenConfigs.tokenSecret, tokenConfigs.options);
}

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, tokenConfigs.tokenSecret, tokenConfigs.options, (err, payload) => {
            if (err) {
                reject(err);
            }

            resolve(payload);
        });
    });
}

export function setAuthenticationCookie(res, token) {
    res.cookie(cookieConfigs.authenticationCookieName, token, cookieConfigs.options);
}

export function deleteAuthenticationCookie(res) {
    res.clearCookie(cookieConfigs.authenticationCookieName);
}

export default {
    isAuthenticated,
    signTokenSync,
    signToken,
    verifyTokenSync,
    verifyToken,
    setAuthenticationCookie,
    deleteAuthenticationCookie
}