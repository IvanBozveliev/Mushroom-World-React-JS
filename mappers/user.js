export const getRegisterModel = (obj) => {
    const {username, email, password} = obj;
    return {
        username,
        email,
        password
    }
};

export const getLoginModel = (obj) => {
    const {identifier, password, rememberMe} = obj;
    return {
        password,
        identifier,
        rememberMe: rememberMe || false
    }
};

export const getRemoveModel = (userId, obj) => {
    const {verificationHash, password} = obj;
    return {
        id: userId,
        verificationHash,
        password
    }
}

export const getUserWithIdViewModel = (obj) => {
    const {_id, username, email, roles} = obj;
    return {
        id: _id,
        username,
        email,
        roles
    }
};

export const getUserViewModel = (obj) => {
    const {username, email} = obj;
    return {
        username,
        email
    }
};

export const getUserTokenModel = (obj) => {
    const {id, roles} = obj;

    return {
        id,
        roles
    }
}

export default {
    getRegisterModel,
    getLoginModel,
    getUserWithIdViewModel,
    getUserViewModel,
    getUserTokenModel
}