import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-100 shadow-lg font-semibold px-5 py-2 m-2 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button