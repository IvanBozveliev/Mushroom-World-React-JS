import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import AllMush from './components/AllMush';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContatUs';

import './App.css';

class App extends Component {

   constructor(props){
     super(props);
     this.state = {
       loading: true
     }
   }

   componentDidMount(){
     this.fakeRequest()
           .then(() => {
             const el = document.querySelector('.loader_bg');
             console.log(el)
             if(el){
               el.remove(); // removing the loading element
               this.setState({loading: false}) // showing the app
             }
           })
   }

   fakeRequest(){
     return new Promise(resolve => setTimeout(() => resolve(), 2500))
   }

  render() {

    if(this.state.loading){ 
      return null //app is not ready (fake request is in process)
    }


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


}

export default App;
