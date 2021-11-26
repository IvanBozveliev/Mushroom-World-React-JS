const url = 'http://localhost:5000/recipes';

export const getAll = () => {

    return fetch(url)
              .then(res => res.json())
              .then(data => data)
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipedata)
    })
             .then(res => res.json())
             .then(data => data)
             .catch(error => console.log(error))
}

export const edit = (id, recipedata) => {
    return fetch(`${url}/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipedata)
    })
             .then(res => res.json())
             .then(data => data)
             .catch(error => console.log(error))
}