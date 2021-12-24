import { useState } from 'react';

const useSessionStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
       
        try {

            let item = sessionStorage.getItem(key);
            console.log(item)
            return item ? JSON.parse(item) : initialValue
        }catch(error){
            return initialValue
        }
       
    });

    const setItem = (value) => {
        
        try {
            sessionStorage.setItem(key, JSON.stringify(value))
            setState(value)
        }catch(err){
            console.log(err)
        }
    }

    return [
        state,
        setItem
    ]
}

export default useSessionStorage