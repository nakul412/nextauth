'use client'

import { useSession,getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const SessionClient = () => {
    const  [sessionValue,setSessionValue] = useState({})
    const {data: session, status} = useSession();
    useEffect(()=>{
       const getSessionInfo = async() =>{
        const session = await getSession();
        setSessionValue(session);
       }
       getSessionInfo()
    },[])
  return (
    <div>SessionClient   {JSON.stringify(session)}
    {JSON.stringify(sessionValue)}</div>
  )
}

export default SessionClient