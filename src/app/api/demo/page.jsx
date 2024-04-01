'use client'
import React, { useEffect, useState } from 'react'

const demo = () => {
  const a=[
    1,
  "nakul"
  ]
    const [ value,setValue] = useState(a);
    const handle =()=>{
      setValue([
        2,
      "nakul"
      ]);
    }
   useEffect(()=>{
     console.log("hello");
   },[value])
    
  return (
    <div><button onClick={handle}>
         click
        </button>{value}</div>
  )
}

export default demo
