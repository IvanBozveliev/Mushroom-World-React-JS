import { Route, Switch } from 'react-router-dom';

import AllMush from './components/AllMush';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContatUs';

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
        </Switch>

        <Footer />
      </div>
    );
  


}

export default App;
