import React from 'react'
import TagSlider from './TagSlider';
import VideoContainer from './VideoContainer';
import {useSelector} from 'react-redux';
import Sidebar from "./Sidebar";

const Maincontainer = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
   
      <div className="Body_container">
      <Sidebar />
      <div className={isMenuOpen?'main_container':'main_container reduce_margin'}>
        <TagSlider/>
        <div className="videoContainer_flex">
          
        <VideoContainer/>
          
        </div>
      </div>
    </div>
  )
}

export default Maincontainer;