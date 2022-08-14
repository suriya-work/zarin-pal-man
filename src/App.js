import React from 'react';
import "./App.css";
// import "./Component/fonts/Roboto-Black.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';

//COMPONENT
// import Headers from './Component/Headers';
import Landing from './Component/Landing';
import Login from './Component/Login';
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;