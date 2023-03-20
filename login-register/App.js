import React from "react";
import { useState } from "react";
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import './App.css';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

///////////...... used for login.js file login class ............/////
//import './App.css';
/*import Login from './login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}*/

export default App;
