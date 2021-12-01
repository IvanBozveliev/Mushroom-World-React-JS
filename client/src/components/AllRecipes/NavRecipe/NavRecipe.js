import { Link } from 'react-router-dom';
import './NavRecipe.css'
const NavRecipe = () => {
    return (
        <>
            <Link className="sortBtnRecipe" to={"/all-recipes/categories/min"}>Min. Cooking Time </Link>
            <Link className='sortBtnRecipe' to={"/all-recipes/categories/max"}>Max. Cooking Time</Link>
        </>
    )
}

export default NavRecipe;