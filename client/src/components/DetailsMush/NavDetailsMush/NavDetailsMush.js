import { Link } from 'react-router-dom';
import './NavDetailsMush.css';

const NavDetailsMush = () => {
    return (
        <>
            <Link className="sortBtnEditMush" to={"/all-mushrooms/categories/poison"}>Edit</Link>
            <Link className='sortBtnDeleteMush' to={"/all-mushrooms/categories/all"}>Delete</Link>
        </>
    )
}

export default NavDetailsMush;