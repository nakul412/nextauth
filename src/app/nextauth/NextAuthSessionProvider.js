'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"
const NextAuthSessionProvider = ({children}) => {
  return (
    <div>
    <SessionProvider>
        {children}
    </SessionProvider></div>
  )
  
}

export default NextAuthSessionProvider