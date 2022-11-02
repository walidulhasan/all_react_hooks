import React from 'react'
import ChildB from './ChildB';

const ChildA=({user})=> {
  return (
    <div>
      <ChildB user={user}/>
    </div>
  )
}
export default ChildA;
