import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as authService from './services/authService';

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

 const [useInfo, setUserInfo] = useState({isAuthenticated: false, username: ''})

    useEffect(() => {
      let user = authService.getUser();
     
      setUserInfo({
        isAuthenticated: Boolean(user),
        user,
      })
    }, []);

    const onLogin = (username) => {
       setUserInfo({
         isAuthenticated: true,
         user: username,
       })
    }

    const onLogout = () => {
      setUserInfo({
        isAuthenticated: false,
        user: null,
      })
    }

    return (
      <div className="App">
       
        <Header {...useInfo}/>

        <Switch>

          <Route path='/' component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/all-mushrooms" component={AllMush} />
          <Route path="/add-mushroom" component={AddMush} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/recipes/details/:recipeId" component={DetailsRecipes} /> 
          <Route path="/mush/details/:mushId" component={DetailsMush} />
          <Route path="/register" render={() => <Register onLogin={onLogin} />} />
          <Route path="/login" render={() => <Login onLogin={onLogin} />} /> 
          <Route path="/logout" render={() => <Logout onLogin={onLogout} />} />

        </Switch>

        <Footer />
      </div>
    );
  


}

export default App;
