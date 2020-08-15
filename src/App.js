import React from 'react';
import  './components/Calendar'
import './css/styles.css'
import Header from './components/Header'
import Nav from './components/Nav'
import routes from './routes/routes'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
