import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className='w-48 p-5 ml-2 shadow-lg'>
      <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>News</li>
          <li>Learning</li>
          <li>Podcast</li>
        </ul>
    </div>
  )
}

export default Sidebar