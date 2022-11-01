import React, { useEffect, useState } from 'react'

export default function Clock() {
  const[clock,setClock]=useState(new Date().toLocaleTimeString());
  const tick=()=>{
    console.log('Clock ticking')
    setClock(new Date().toLocaleTimeString())
  }
  useEffect(()=>{
    
   const ticktick=  setInterval(tick,1000);
    return()=>{
      console.log('Clock Stop')
      clearInterval(ticktick)
    }
  },[clock])
  return (
    <div>{clock}</div>
  )
}
