import React, { useContext } from 'react'
import { AppContest } from './UseContext'
export default function GetDataFormProvider() {
const appData=useContext(AppContest)
  return (
    <div>
      <h1>User Name:{appData.name}</h1>
      <h1>User Age:{appData.age}</h1>
    </div>
  )
}
