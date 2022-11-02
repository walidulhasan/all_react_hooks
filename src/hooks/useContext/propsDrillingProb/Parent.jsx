import React from 'react'
import ChildA from './ChildA';
const Parent=({user})=> {
  
  return (
    <div>
      <ChildA user={user} />
    </div>
  )
}
export default Parent;
