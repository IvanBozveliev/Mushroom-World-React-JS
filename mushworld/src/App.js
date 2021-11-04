import {  Route , Switch} from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import About from './About';
import HomePage from './HomePage';

import './App.css';

function App() {
  return (
    <div>
      <div className="loader_bg">
        <div className="loader"><img src="/images/loading.gif" alt="#" /></div>
      </div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
