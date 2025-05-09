
import React from 'react'

export const Greet = async({params}:{
  params:Promise<{name:string}>
}) => {
  const {name}  = await params;
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}

export default Greet;