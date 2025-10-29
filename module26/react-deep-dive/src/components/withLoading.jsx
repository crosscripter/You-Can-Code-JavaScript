import React from 'react';

function UserList({ users }) {
  return (
    <ol>
      {users.map((user,i) => <li key={`user${i}`}>{user}</li>)}
    </ol>
  );
}

function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}

export default withLoading;

export const UserListWithLoading = withLoading(UserList);
