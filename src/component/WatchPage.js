import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import {GOOGLE_API_KEY} from "../constant"

const WatchPage = () => {
    const dispatch = useDispatch();
    const [video, setVideo] = useState({});
    const [searchParam] = useSearchParams();
 //  console.log(searchParam.get("v"));
    const videoId = searchParam.get("v");
//    console.log(video[0]?.snippet?.title);

  const {title, channelTitle, publishedAt,tags, description}  =video[0]?.snippet ||{};
  const {likeCount, viewCount,commentCount,favouriteCount} = video[0]?.statistics ||{};

    const getVideoData = async ()=>{
      const url ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoId+
      "&key="+
      GOOGLE_API_KEY;

      const data = await fetch(url);
      const watchVideoJson = await data.json();
     console.log(watchVideoJson);
      setVideo(watchVideoJson.items);      
    }
   
 useEffect(()=>{
        dispatch(closeMenu());
        getVideoData();

    },[]);

  return (
    <div className='w-screen px-20 py-2'>
      <iframe className='p-2 rounded-lg'
        width="900" height="450" 
        src={"https://www.youtube.com/embed/" + videoId} 
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; 
        gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
     </iframe>
      <div>
        <h3 className='font-bold'>{title}</h3>
      </div>
      <div className='py-4 bg-gray-100 px-4 w-[900px] flex justify-between'> 
        <div className=''>
          <h2 className='font-bold'>{channelTitle}</h2>
          <p>25022 subscribers</p>
        </div>
        <div>
          
        </div>
        <button 
          className='font-bold bg-black text-white text-md ml-12 rounded-full px-4 '>Subscribe
        </button>

        <button 
          className='bg-gray-200 ml-28 font-bold px-8 text-lg rounded-full text-center'>
           <img className='h-6 w-6' src='https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/like-64.png'/> 
          {likeCount}
        </button>

        <button 
          className='flex gap-1 items-center bg-gray-200 ml-20 font-bold px-6  rounded-full '>
            <img className='w-6 h-6'
              src='https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/right-forward-next-turn-share-64.png'/>Share
        </button>

        <button 
          className='bg-gray-200  ml-4 font-bold px-6 flex  rounded-full  items-center ' >
            <img className='w-6 h-6' 
              src='https://cdn4.iconfinder.com/data/icons/navigation-40/24/download-64.png'/>Download
        </button>
      </div>

      <div className='py-4 w-[900px] bg-gray-200'>
          <div className='px-4'>
            <span className='font-semibold'>{viewCount} views</span>
            <span className='font-semibold ml-4'>{publishedAt}</span>
            <span className='font-normal ml-4'>
            {tags?.map((hash)=>{
                return <span>#{hash}  </span>
            }
              )}
            </span>
          </div>
          <div className='p-4 font-semibold'>
           <p>{description}</p> 
          </div>
      </div>

    </div>
  )
}

export default WatchPage;
