import { Route, Switch } from 'react-router-dom';
import { useState} from 'react';

import NotFound from './components/NotFound';
import { AuthContext } from './contexts/AuthContext';
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


const initialAuthState = {
  id: '',
  username: '',
  token: ''
}

function App() {
  
  const [user, setUser] = useState(initialAuthState)

  const login = (authData) => {
     setUser(authData)
  }

  const logout = () => {
     setUser(initialAuthState)
  }

  return (

    <AuthContext.Provider value={{user, login, logout}}>
      <div className="App">

        <Header user={user.username}/>

        <Switch>

          <Route path='/' component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/all-mushrooms" component={AllMush} exact />
          <Route path="/all-mushrooms/categories/:mushType" component={AllMush} exact />
          <Route path="/add-mushroom" component={AddMush} />
          <Route path="/all-recipes" component={AllRecipes} exact />
          <Route path="/all-recipes/categories/:cookingTime" component={AllRecipes} exact />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/recipes/details/:recipeId" component={DetailsRecipes} exact/>
          <Route path="/mush/details/:mushId" component={DetailsMush} exact/>
          <Route path="/mush/details/edit/:mushId" component={EditMush} />
          <Route path="/recipes/details/edit/:recipeId" component={EditRecipe} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path='/logout' component={Logout} />
          <Route component={NotFound} />
          
        </Switch>

        <Footer />
      </div>
    </AuthContext.Provider>

  );



}

export default App;
