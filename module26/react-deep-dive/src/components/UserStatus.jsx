import React from 'react';

export default function UserStatus(props) {
  return (
    <div>
      <h4>
        {props.isLoggedIn ? 'Welcome back!' : 'Please sign in'}
      </h4>

      <button onClick={props.handleClick}>
        {props.isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
