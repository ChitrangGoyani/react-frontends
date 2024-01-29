import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [name, setName] = useState("");
    useEffect(() => {
        (
            async () => {
                const response = fetch("http://localhost:8000/api/user", {
                    method: "GET",
                    credentials: 'include',
                    headers: {"Content-Type": "application/json"},
                });

                const content = (await response).json;
                setName(content.name)
            }
        )();
    })
    
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>
        <main className="form-signin w-100 m-auto">
        
          <Routes>
            <Route path='/' Component={() => <Home name={name}></Home>}/>
            <Route path='/login' Component={() => <Login setName={setName}></Login>} />
            <Route path='/register' Component={Register} />
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
