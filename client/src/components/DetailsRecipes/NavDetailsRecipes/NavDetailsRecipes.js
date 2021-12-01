import { Link } from 'react-router-dom';
import './NavDetailsRecipes.css';

const NavDetailsRecipes = () => {
    return (
        <>
            <Link className="sortBtnEditRecipe" to={"/all-mushrooms/categories/poison"}>Edit</Link>
            <Link className='sortBtnDeleteRecipe' to={"/all-mushrooms/categories/all"}>Delete</Link>
        </>
    )
}

export default NavDetailsRecipes;