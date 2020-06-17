import React from 'react';
import Main from './pages/Main';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
