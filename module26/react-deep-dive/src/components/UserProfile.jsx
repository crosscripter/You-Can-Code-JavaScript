import React from 'react';
import { useState } from 'react';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

export default function UserProfile({ userData }) {
  const [user, setUser] = useState(userData ?? ({
    id: 123,
    age: 52,
    name: 'Bob',
    location: 'NY',
    username: 'iambob2',
    img: 'https://randomuser.me/api/portraits/men/21.jpg'
  }));

  return (
    <UserContext.Provider value={user}>
      <img src={user.img} style={{ width: 80 }} />
      <h5 style={{margin: 0}}>@{user.username}</h5>
      <hr />
      <UserInfo user={user} />
    </UserContext.Provider>
  );
}
