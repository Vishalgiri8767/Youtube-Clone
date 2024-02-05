import React from 'react'
import Button from './Button'

const ButtonList = ({name}) => {

  const list = [
    "Gaming",
    "Movies",
    "Car", 
    "Trending",
    "Live",
    "Songs", 
    "Trailers",
    "Movies",
    "Cricket",
    "Ipl",
    "Cooking",
    "Shopping",
  ];

  return (
    <div className='flex px-10'>

    {list?.map((btnName,index)=>{
        return <Button key={index} name={btnName} />
    })}
       {/*    
        <Button name="Songs" />
        <Button name="Trailers" />
        <Button name="Movies" />
        <Button name="Cricket" />
    */}

    </div>
  )
}

export default ButtonList