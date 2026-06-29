import React from 'react'

const HomeCard = (props) => {
  return (
    <div className='flex items-center'>
        <div>
            {props.icon}
        </div>
        <div className='flex flex-col justify-center items-center p-1'>
            <h1 className='text-xl font-bold'>{props.count}</h1>
            <h1 className='text-neutral-700 text-sm font-medium '>{props.type}</h1>
        </div>
    </div>
  )
}

export default HomeCard
