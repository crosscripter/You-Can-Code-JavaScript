import React, { useEffect } from 'react';
import { useUserData } from '../hooks';
import hljs from 'highlight.js';

export default function UserData({ userId }) {
  const user = useUserData(userId);
  useEffect(() => hljs.highlightAll(), [user]);
  if (!user) return 'loading...';

  return (
    <div className='userData'>
      <h5>User Data</h5>
      <b>{user.name}</b>
      <pre style={{fontSize: 'x-small'}}>
        <code className='language-json'>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  );
}
