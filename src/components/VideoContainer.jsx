// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { YOUTUBE_VIDEO_API } from './constant';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const [items, setItems] = useState(0);
  
    useEffect(() => {
      getYoutubeVideo();
    }, []);
    
    const getYoutubeVideo = async () =>{
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideo(json.items);      
    }

    const loadmore = () =>{
      if(items + 6 <= video.length) {
        setItems(items + 6)
      }
    }
  return (
    <>
        {video.slice(0, items + 9).map((video)=>(
          <Link key={video.id} to={'/watch?v='+ video.id}><VideoCards info={video}/></Link>
        ))}
        <div className={items + 6 <= video.length - 6?'load_more':'hidden'}><button onClick={()=>loadmore()}>Load More...</button></div>
    </>
  )
}

export default VideoContainer;