import Footer from './Footer'
import Header from './Header';

import './App.css'
function App() {
  return (
    <div>
      <div className="loader_bg">
        <div className="loader"><img src="/images/loading.gif" alt="#" /></div>
      </div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
