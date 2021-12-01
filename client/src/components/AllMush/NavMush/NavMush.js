import { Link } from 'react-router-dom';
import './NavMush.css';

const NavMush = () => {
    return (
        <>
            <Link className="sortBtn" to={"/all-mushrooms/categories/poison"}>Poison</Link>
            <Link className='sortBtn' to={"/all-mushrooms/categories/all"}>All</Link>
            <Link className="sortBtn" to={"/all-mushrooms/categories/edable"}>Edable</Link>
        </>
    )
}

export default NavMush;