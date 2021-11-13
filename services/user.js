import crypto from "crypto";
import User from "../models/User.js";
import {passwordConfigs} from "../configs/security.js";
import {getLoginModel, getRegisterModel, getUserWithIdViewModel} from "../mappers/user.js";

export function generateSaltSync() {
    return crypto.randomBytes(passwordConfigs.passwordSaltLength).toString(passwordConfigs.encoding);
}

export function generateSalt() {
    return new Promise(((resolve, reject) => {
        crypto.randomBytes(passwordConfigs.passwordSaltLength, (err, salt) => {
            if (err) {
                reject(err);
            }

            resolve(salt.toString(passwordConfigs.encoding));
        });
    }));
}

export function generateHashSync(salt, password) {
    return crypto.pbkdf2Sync(
        password,
        salt,
        passwordConfigs.iterationsCount,
        passwordConfigs.passwordHashLength,
        passwordConfigs.hashingAlgorithm).toString(passwordConfigs.encoding);
}

export function generateHash(salt, password) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password,
            salt,
            passwordConfigs.iterationsCount,
            passwordConfigs.passwordHashLength,
            passwordConfigs.hashingAlgorithm,
            (err, hash) => {
                if (err) {
                    reject(err);
                }

                resolve(hash.toString(passwordConfigs.encoding));
            }
        )
    });
}

export async function createUser(model) {
    model = getRegisterModel(model);
    const user = new User(model);

    await user.setPassword(model.password)
    await user.save();

    return getUserWithIdViewModel(user);
}

export async function checkUser(model) {
    model = getLoginModel(model);
    let user = await User.getByUsername(model.identifier) || await User.getByEmail(model.identifier);

    if (!user) {
        throw "Invalid Credentials!";
    }

    if (await user.checkPassword(model.password)) {
        return getUserWithIdViewModel(user);
    }
}

export async function usernameExists(username) {
    return !!(await User.findOne({username: username}).exec());
}

export function generateVerificationHash(userId) {
    return crypto
        .createHmac(passwordConfigs.hashingAlgorithm, userId)
        .update(userId)
        .digest(passwordConfigs.encoding)
}

export async function deleteUser(model) {
    const user = await User.findById(model.id).exec();
    if (user
        && await user.checkPassword(model.password)
        && generateVerificationHash(model.id) === model.verificationHash) {
        return getUserWithIdViewModel(await User.findByIdAndRemove(model.id));
    }
}

export default {
    generateSaltSync,
    generateSalt,
    generateHashSync,
    generateHash,
    createUser,
    checkUser,
    generateVerificationHash,
    deleteUser
}