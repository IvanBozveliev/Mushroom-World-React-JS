import React from 'react'
import App from '../../App';

const Loading = () => {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 3000)

        return () => clearTimeout(timeout)

    }, [show])

    // if (!show) return null

    return <App />
}

export default Loading
