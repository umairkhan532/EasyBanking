import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';


const App = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [ssn, setSSN] = useState('');


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSSNChange = (event) => {
    setSSN(event.target.value);
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
      address,
      firstName,
      lastName,
      ssn,
    };

    try {
      const response = await Axios.post('http://localhost:5000/register', user);
      if (response.status === 200 || response.status === 201) {
        alert('Registration successful');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    
    };

    try {
      const response = await Axios.post('http://localhost:5000/login', user);
      if (response.status === 200 || response.status === 201) {
        alert('Login successful');
        
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  const handleToggleAuth = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    
    <div>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      
      {isRegistering ? (
        <div className="form-container-register">
          <form>
            <div className="row">
              <div className="col">
                <label>
                  First Name:
                  <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </label>
                <label>
                  Last Name:
                  <input type="text" value={lastName} onChange={handleLastNameChange} />
                </label>
                <label>
                  Address:
                  <input type="text" value={address} onChange={handleAddressChange} />
                </label>
              </div>
              <div className="col">
                <label>
                  SSN:
                  <input type="text" value={ssn} onChange={handleSSNChange} />
                </label>
                <label>
                  Email:
                  <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
              </div>
            </div>

            <button type="submit" onClick={handleRegistrationSubmit}>
              Register
            </button>
          <p>Already have an account? <button onClick={handleToggleAuth}>Login</button></p>
          
          
        </form>
        </div>
      
      ) : (
        <div className="form-container-login">
        <form>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit" onClick={handleLoginSubmit}>Login</button>
          <p>Don't have an account? <button onClick={handleToggleAuth}>Register</button></p>
        </form>
        </div>
      )}
  
    </div>  
    
  );
};

export default App;
