export const getCreateModel = (obj) => {
    const {
        brand,
        model,
        VIN,
        registrationNumber
    } = obj;
    return {
        brand,
        model,
        VIN,
        registrationNumber,
        visits: []
    }
}

export const getUpdateModel = (obj) => {
    const {
        id,
        brand,
        model,
        VIN,
        registrationNumber,
        visits
    } = obj;

    return {
        id,
        brand,
        model,
        VIN,
        registrationNumber,
        visits
    }
}

export const getViewModel = (obj) => {
    const {
        _id,
        brand,
        model,
        VIN,
        registrationNumber,
        visits
    } = obj;

    return {
        id: _id,
        brand,
        model,
        VIN,
        registrationNumber,
        visits
    }
}

export default {
    getCreateModel,
    getUpdateModel,
    getViewModel
}