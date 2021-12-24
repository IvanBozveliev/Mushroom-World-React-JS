import { Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import EditMush from './components/EditMush';
import EditRecipe from './components/EditRecipe/EditRecipe';
import AllRecipes from './components/AllRecipes';
import DetailsRecipes from './components/DetailsRecipes';
import AllMush from './components/AllMush';
import DetailsMush from './components/DetailsMush';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AddMush from './components/AddMush';
import AddRecipe from './components/AddRecipe';
import Logout from './components/Logout';

import './App.css';


function App() {

  return (

    <AuthProvider>
        <div className="App">

          <Header />

          <Switch>

            <Route path='/' component={HomePage} exact />
            <Route path="/about" component={About} />
            <Route path="/all-mushrooms" component={AllMush} exact />
            <Route path="/all-mushrooms/categories/:mushType" component={AllMush} exact />
            <Route path="/add-mushroom" component={AddMush} />
            <Route path="/all-recipes" component={AllRecipes} exact />
            <Route path="/all-recipes/categories/:cookingTime" component={AllRecipes} exact />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/recipes/details/:recipeId" component={DetailsRecipes} exact />
            <Route path="/mush/details/:mushId" component={DetailsMush} exact />
            <Route path="/mush/details/edit/:mushId" component={EditMush} />
            <Route path="/recipes/details/edit/:recipeId" component={EditRecipe} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path='/logout' component={Logout} />
            <Route component={NotFound} />

          </Switch>

          <Footer />
        </div>
    </AuthProvider>

  );



}

export default App;
