import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandle = ()=>{
      dispatch(toggleMenu());
      
  };
  
  return (
    <div className='w-full grid grid-flow-col m-2 p-5 shadow-lg'>
      <div className='flex col-span-1 '>
        <img onClick={()=> toggleMenuHandle()}
          className='h-8 cursor-pointer'
          alt='menu'
          src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'  
        />
        
        <img className='h-8 mx-2'
          alt='youtube' 
          src='https://ongpng.com/wp-content/uploads/2023/04/3-13.png'
        />
        
      </div>
      <div className='flex col-span-10 px-10 '>
        <input className='w-1/2 border outline-none border-gray-500 p-2 rounded-l-full' type='text' placeholder='Search for videos'/>
        <button className='border border-gray-500 py-2 px-4 bg-gray-200 rounded-r-full'>
          <img className='h-5' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' />
        </button>
      </div>
      <div className='flex col-span-1 '>
        <img className='h-8'
            alt='user'
            src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
        />
       
      </div>
    </div>
  )
}

export default Header