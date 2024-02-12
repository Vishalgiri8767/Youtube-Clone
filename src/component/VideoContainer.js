import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addVideos } from '../utils/appSlice';


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
      const data = await fetch(YOUTUBE_VIDEOS_URL);
      const json = await data.json();
      setVideos(json.items);

      dispatch(addVideos(json.items));
  }

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

export default VideoContainer;