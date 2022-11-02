//import { useState } from "react";
//import UseStateHook from "./hooks/useState/UseState";
//import LoginForm from "./hooks/useState/LoginForm"
//import UseEffectHook from "./hooks/useEffect/UseEffect"
//import Counter from "./hooks/useEffect/Counter"
//import Clock from "./hooks/useEffect/Clock"
//import Parent from "./hooks/useContext/propsDrillingProb/Parent";
import GetDataFormProvider from "./hooks/useContext/GetDataFormProvider";
import { AppProvider } from "./hooks/useContext/UseContext";

function App() {
  //const [show,setShow]=useState(true)
  // const user={
  //   name:'Walidulhasan',
  //   age:25
  // }
  return (
    <>
      {/* <UseStateHook/> */}
      {/* <LoginForm/> */}
      {/* <UseEffectHook/> */}
      {/* <Counter/> */}
      {/* <div>{show && <Clock/>}</div>
    <p>
      <button type="button" onClick={()=>{setShow((prevShow)=>!prevShow)}}>
      {show ? 'Hide post':'Show post'}
      </button>
    </p> 
    */}
      {/* <Parent user={user}/> */}
      <AppProvider>
        <GetDataFormProvider />
      </AppProvider>

    </>

  );
}

export default App;
