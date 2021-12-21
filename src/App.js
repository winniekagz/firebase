import React from 'react';
import Signup from './components/signup';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { Container } from "react-bootstrap"
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { AuthProv } from './contexts/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
  
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
         
          <AuthProv>
            <Routes>
              <PrivateRoute exact path="/" element={<DashBoard/>}/>
              <Route exact path="/register" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            </AuthProv>
          
  
      </div> 
        </Container> 
        
      
    </div>
  );
}

export default App;
