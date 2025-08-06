import React from 'react';
import { BrowserRouter  as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';

const routes = (

  <Router>
    <Routes>
      <Route path="/dashboard" exact  element={<Home />} />
      <Route path="/login" exact  element={<Login />} />
      <Route path="/SignUp" exact  element={<SignUp />} />
    </Routes>
  </Router>
);


const App = () => {
  return (
    <div>
      {routes}
    </div>
  );
};

export default App;