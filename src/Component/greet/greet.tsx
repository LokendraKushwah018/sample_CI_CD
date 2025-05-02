import React from 'react'

type Greetprops = {
name?:string
}

const Greet = (props:Greetprops) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet

