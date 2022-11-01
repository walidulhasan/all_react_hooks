//import UseStateHook from "./hooks/useState/UseState";
//import LoginForm from "./hooks/useState/LoginForm"
//import UseEffectHook from "./hooks/useEffect/UseEffect"
//import Counter from "./hooks/useEffect/Counter"
import { useState } from "react";
import Clock from "./hooks/useEffect/Clock"


function App() {
  const [show,setShow]=useState(true)
  return (
    <>
    {/* <UseStateHook/> */}
    {/* <LoginForm/> */}
    {/* <UseEffectHook/> */}
    {/* <Counter/> */}
    <div>{show && <Clock/>}</div>
    <p>
      <button type="button" onClick={()=>{setShow((prevShow)=>!prevShow)}}>

      {show ? 'Hide post':'Show post'}
      </button>
    </p>
    </>
  );
}

export default App;
