import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieSuggestion, toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../constant';

const Header = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(()=> {
    //make an api call after every key press.
    //but if the diffrence between two key press < 200ms
    //decline the api call.
    const timer = setTimeout(()=>(getSearchSuggestions()), 200);

    return ()=>{
      clearTimeout(timer);
    };
  },[searchInput]);

  const getSearchSuggestions = async()=>{
    console.log(searchInput);
    const data = 
        await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchInput);
    const json = await data.json();
    console.log(json[1]);
    setSearchSuggestion(json[1]);
  
  };
  const toggleMenuHandle = ()=>{
    dispatch(toggleMenu());
  };

  return (
    <div className=' w-full grid grid-flow-col m-2 p-5 shadow-lg'>
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
      <div className='flex flex-col col-span-10 px-10 '>
       <div className=' flex'>
         <input 
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            value={searchInput}
            className='w-1/2 border outline-none border-gray-500 px-8 rounded-l-full' type='text' placeholder='Search for videos'
         />
          <button className='border border-gray-500 py-2 px-4 bg-gray-200        rounded-r-full'>
            <img className='h-5' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' />
          </button>
       </div>
    { showSuggestions &&
        <div className='fixed px-8 rounded-lg mt-10 bg-white shadow-lg py-2 w-[34rem] border border-gray-200'>
          <ul>
             { searchSuggestion.map((suggestion)=> 
             <li className='flex items-center gap-4 hover:bg-gray-200 cursor-pointer border border-gray-100'>
                <img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' className='h-4 mt-1' />
               {suggestion}
              </li>)}
          </ul>
        </div>
        }
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