'use server'

import { getServerSession } from "next-auth"

import React from 'react'

const SessionServer = async () => {
    const session = await getServerSession();
  return (
    <>
    <h3>
    Server Component {JSON.stringify(session)};
    </h3>
    
    </>
  )
}

export default SessionServer