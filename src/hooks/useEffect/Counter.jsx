import React, { useEffect, useState } from 'react'

export default function Counter() {
  const[count,setCount]=useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[count])
  return (
    <>
         <h1>Count-{count}</h1>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid fuga ratione labore ab eius sed adipisci at voluptate porro, dolores tenetur dignissimos quasi nihil dicta? Labore vero nesciunt dolorum!</h1>
    </>
  )
}
