import { Route, Switch } from 'react-router-dom';

import AllRecipes from './components/AllRecipes';
import DetailsRecipes from './components/DetailsRecipes';
import AllMush from './components/AllMush';
import DetailsMush from './components/DetailsMush';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContatUs';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {

    return (
      <div className="App">
       
        <Header />

        <Switch>

          <Route path='/' component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={ContactUs} />
          <Route path="/all-mushrooms" component={AllMush} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="/recipes/:recipeId" component={DetailsRecipes} /> 
          <Route path="/mush/:mushId" component={DetailsMush} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </Switch>

        <Footer />
      </div>
    );
  


}

export default App;
