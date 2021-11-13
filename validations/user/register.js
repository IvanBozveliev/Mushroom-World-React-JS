import {body} from "express-validator";
import {hasLengthMessage, isRequiredMessage} from "../messages.js";
import {username, password} from "../../models/constants/user.js";
import fields from "./fieldNames.js";
import User from "../../models/User.js";

export default [
    body(fields.usernameFieldName)
        .exists({checkFalsy: true})
        .withMessage(isRequiredMessage(fields.usernameFieldName))
        .bail()
        .isString()
        .isLength({
            min: username.minLength,
            max: username.maxLength
        })
        .withMessage(hasLengthMessage(fields.usernameFieldName, username.minLength, username.maxLength))
        .custom(async (value) => {
            const user = await User.usernameExists(value);
            if (!!user) {
                throw "Username exists."
            }

            return true;
        }),
    body(fields.emailFieldName)
        .exists({checkFalsy: true})
        .withMessage(isRequiredMessage(fields.emailFieldName))
        .bail()
        .isEmail()
        .withMessage(`Valid E-Mail address is required.`)
        .custom(async (value) => {
            const user = await User.emailExists(value);
            if (!!user) {
                throw "E-Mail exists."
            }

            return true;
        }),
    body(fields.passwordFieldName)
        .exists({checkFalsy: true})
        .withMessage(isRequiredMessage(fields.passwordFieldName))
        .bail()
        .isLength({
            min: password.minLength,
            max: password.maxLength
        })
        .withMessage(hasLengthMessage(fields.passwordFieldName, password.minLength, password.maxLength))
        .custom(value => value.toLowerCase() !== value)
        .withMessage("Password must contain capital letter.")
        .custom(value => value.toUpperCase() !== value)
        .withMessage("Password must contain small letter.")
        .custom(value => /[0-9]+/g.test(value))
        .withMessage("Password must contain digit.")
        .custom(value => /[^a-zA-Z\d\s:]+/g.test(value))
        .withMessage("Password must contain non-alphanumeric symbol."),
    body(fields.confirmPasswordFieldName)
        .exists({checkFalsy: true})
        .withMessage(isRequiredMessage(fields.confirmPasswordFieldName))
        .bail()
        .custom((val, {req}) => val === req.body[fields.passwordFieldName])
        .withMessage(`The passwords do NOT match.`)
]