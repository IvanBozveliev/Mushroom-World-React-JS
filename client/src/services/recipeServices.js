import {getUser} from './authService';

const url = 'http://localhost:5000/recipes';

export const getAll = (cookingTime) => {

    let newUrl = url;

    if (cookingTime && cookingTime !== '') {
        newUrl = url + `?cookingTime=${cookingTime}`
    }

    return fetch(newUrl, {
        method: 'GET',
        headers: {
            // 'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getOne = (recipeId) => {
    return fetch(`${url}/${recipeId}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const create = (recipedata) => {
    return fetch(url, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipedata)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const editOne = (recipeId, recipeData) => {
    
    return fetch(`${url}/${recipeId}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeData)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteOne = (id) => {

    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .catch(error => console.log(error))
        
}

export const likeOne = (recipeId) => {

    return fetch(`${url}/likes/${recipeId}`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .catch(error => console.log(error))
        
}