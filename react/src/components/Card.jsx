import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white text-black inline-block p-8 px-16 text-center rounded mr-5 mb-5'>
      <img className='h-32 w-32 rounded-full mb-3' src={props.profilePic} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
      <h2 className='mb-4 text-blue-900 text-center'>{props.prof}</h2>
      <h2>{props.city}, {props.age}</h2>
      <button className='bg-emerald-700 text-white px-3 py-2 rounded font-medium mt-5'>Add Friend</button>
    </div>
  )
}

export default Card
