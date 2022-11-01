import React, { useState,useEffect } from 'react';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title=count
  },[count])
  const countCounter = () => {
    if (count>=100) {
      alert("Already Crouse 100 you can't increment morethen")
    }else{
      setCount(()=>count+10)
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            countCounter();
          }}
        >
          <span>
            <ControlPointOutlinedIcon />
          </span>
        </button>
        <div>This is Use Effect Hooks Title {count}</div>
        <button
        id='preButton'
          onClick={() => (count===0?alert("You can't get Negative Value") :setCount(count-1))}
        >
          <span>
            <IndeterminateCheckBoxOutlinedIcon />
          </span>
        </button>
      </div>
    </>
  );
}
export default UseEffectHook;
