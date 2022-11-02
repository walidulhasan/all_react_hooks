//context
//provider
//useContext
import {createContext } from 'react'
const AppContest=createContext();
const AppProvider=({children})=>{
  const user={
    name:'Walidulhasan',
    age:26
  }
  return <AppContest.Provider value={user}>
    {children}
  </AppContest.Provider>
  
}
export {AppContest,AppProvider}