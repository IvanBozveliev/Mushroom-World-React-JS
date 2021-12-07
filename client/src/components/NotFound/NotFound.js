import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='notFoundTxt'>404 - Not Found!</h1>
            <img className='errorImg' src="/images/404.jpg" alt='404'/>
            <Link to="/" className='returnLink'>Go Home</Link>
        </div>
    )
}

export default NotFound;