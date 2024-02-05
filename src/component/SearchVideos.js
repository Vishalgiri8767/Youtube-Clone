import React from 'react'
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';

const searchVideos = () => {
  const videos = useSelector(store=>store.search);
  const isSearchBtnClick = useSelector(store=>store.app.searchBtnClick);
  console.log(isSearchBtnClick);

  return (
    <div className='flex flex-wrap mx-10 '>
      {videos.map((video)=>
      (
      <Link key={video.id} to={"/watch?v="+video.id} >
        <VideoCard info={video}  />
        </Link>
      )
      )} 
    </div>
  )
}

export default searchVideos;