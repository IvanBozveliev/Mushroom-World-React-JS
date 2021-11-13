export const getCreateModel = (obj) => {
    const {name, references, price} = obj;
    return {
        name,
        references,
        price
    }
}

export const getUpdateModel = (obj) => {
    const {name, references, price} = obj;
    return {
        name,
        references,
        price
    }
}

export const getRemoveModel = (obj) => {
    const {id} = obj;
    return {
        id
    }
}

export const getPartViewModel = (obj) => {
    const {_id, name, references, price} = obj;
    return {
        id: _id,
        name,
        references,
        price
    }
}

export default {
    getCreateModel,
    getUpdateModel,
    getRemoveModel,
    getPartViewModel
}