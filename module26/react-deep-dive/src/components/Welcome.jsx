import React from 'react';

export default function Welcome(props) {
  if (!props.name) return <h1>Welcome to React!</h1>;
  return <h1>Welcome, {props.name}!</h1>;
}
