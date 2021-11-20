const url = 'http://localhost:5000/products';

export const getAll = () => {

    return fetch(url)
              .then(res => res.json())
              .then(data => data)
              .catch(error => console.log(error))
}

export const getOne = (mushId) => {
    return fetch(`${url}/${mushId}`)
              .then(res => res.json())
              .catch(error => console.log(error))
}

export const create = () => {
    return fetch(`${url}/create`)
             .then(res => res.json())
             .then(data => data)
             .catch(error => console.log(error))
}

export const edit = () => {
    return fetch(`${url}/edit`)
             .then(res => res.json())
             .then(data => data)
             .catch(error => console.log(error))
}