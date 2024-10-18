import React from 'react'
import Ex2 from './Ex2'

const Ex1 = (props) => {
  return (
    <div>
      I am Example 1 {props.username}
      <Ex2 user={props.username}/>
    </div>
  )
}

export default Ex1
