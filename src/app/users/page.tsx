import React from 'react'

const User = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
const user = await res.json();
console.log(user.name);
  return (
    <div>
      <h1>User</h1>
    </div>
  )
}

export default User