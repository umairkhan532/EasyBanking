import React from 'react'






function WelcomePage ({ firstName, lastName }) {
    return (
      <div>
        <h1>Welcome, {firstName} {lastName}!</h1>
      </div>
    );
  };

  export default WelcomePage