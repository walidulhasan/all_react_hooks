import React,{useState} from 'react'

function UseStateHook() {
  const [set,setGet]=useState(0);
  return (
    <div>This is Use State Hooks {set}</div>
  )
}
export default UseStateHook