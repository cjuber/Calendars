import React from 'react';
import  './components/Calendar'
import Calendar from './components/Calendar';
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
