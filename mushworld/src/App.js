import {  Route , Switch} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContatUs';

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
        <Route path="/contacts" component={ContactUs} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
