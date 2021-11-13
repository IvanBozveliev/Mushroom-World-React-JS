export const getCreateModel = (obj) => {
    const {
        description,
        severity,
        workPrice,
        parts,
        approved
    } = obj;

    return {
        description,
        severity,
        workPrice,
        parts,
        approved
    }
}

export const getUpdateModel = (obj) => {
    const {
        id,
        description,
        severity,
        workPrice,
        parts,
        approved
    } = obj;

    return {
        id,
        description,
        severity,
        workPrice,
        parts,
        approved
    }
}

export const getViewModel = (obj) => {
    const {
        _id,
        description,
        severity,
        workPrice,
        parts,
        approved
    } = obj;

    return {
        id: _id,
        description,
        severity,
        workPrice,
        parts,
        approved
    }
}

export default {
    getCreateModel,
    getUpdateModel,
    getViewModel
}