import React from 'react'

const VideoCards = ({ info }) => {
  // Check if the 'info' object exists and has the 'snippet' property
  if (!info || !info.snippet) {
    // Return null or any fallback UI if 'info' or 'snippet' is undefined
    return null;
  }
// console.log(info)
  // Destructure 'snippet' from the 'info' object
  const { snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  const {viewCount} = statistics;
  
  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + 'M';
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + 'k';
    } else {
      return viewCount;
    }
  };

  // Format the view count
  // const formattedViewCount = formatViewCount(viewCount);
  return (
    <div className='videoCars'>
      <img src={thumbnails.medium.url} alt="mera" />
      <div className='videoinfoContainer'>
        <img alt="channel" src='https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s176-c-k-c0x00ffffff-no-rj' />
        <div className='videoInfo'>
          <p className='title'><strong>{title.length<=60?title.slice(0,70).toLowerCase(): title.slice(0,70).toLowerCase() + '...' }</strong></p>
          <p className='channel_name'>{channelTitle}</p>
          <p className='view_count'><span>{formatViewCount(viewCount)?formatViewCount(viewCount):'233K'} Views</span> . <span>3 weeks ago</span></p>
        </div>
      </div>
    </div>
  );
}

export default VideoCards;
