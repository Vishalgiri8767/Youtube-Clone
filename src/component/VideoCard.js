import React from 'react'

const VideoCard = ({info}) => {
  
  const {snippet, statistics} = info ||{} ;
  const {channelTitle, title, thumbnails, localized } = snippet || {} ;
  const {medium}= thumbnails || {};
  const {url} = medium ||{};
  const {viewCount} = statistics ||{};
  //console.log(info); 

  return (
    <div className=' m-4 rounded-lg  w-72 shadow-xl  '>
        <img className='rounded-lg' src={url} alt='video'/>
        <div className=' px-2 py-2'>
          <p className='font-bold'>{title}</p>
          <p className=''>{channelTitle}</p>
          <span className=''>{viewCount} views</span>
       </div>
    </div>
  )
}

export default VideoCard