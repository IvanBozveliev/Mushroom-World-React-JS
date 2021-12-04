import {useState, useEffect} from 'react'
import App from '../../App';

const Loading = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 3000)

        return () => clearTimeout(timeout)

    }, [show])

    // if (!show) return null

    return <App />
}

export default Loading
