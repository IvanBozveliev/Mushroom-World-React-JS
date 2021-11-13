export const getCreateModel = (obj) => {
    const {
        startDate,
        endDate,
        malfunctions,
        status
    } = obj;

    return {
        startDate,
        endDate,
        malfunctions,
        status
    }
}

export const getUpdateModel = (obj) => {
    const {
        id,
        startDate,
        endDate,
        malfunctions,
        status
    } = obj;

    return {
        id,
        startDate,
        endDate,
        malfunctions,
        status
    }
}

export const getViewModel = (obj) => {
    const {
        _id,
        startDate,
        endDate,
        malfunctions,
        status
    } = obj;

    return {
        id: _id,
        startDate,
        endDate,
        malfunctions,
        status
    }
}

export default {
    getCreateModel,
    getUpdateModel,
    getViewModel
}