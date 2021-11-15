const url = 'http://localhost:5000/products';

export const getAll = () => {

    return fetch(url)
              .then(res => res.json())
              .then(data => data)
              .catch(error => console.log(error))
}