import React from 'react'

const ChildB=({user})=> {
  const {age,name}=user;
  return (
    <div>
      <h1>User Name:{name}</h1>
      <h1>User Age:{age}</h1>
    </div>
  )
}
export default ChildB
