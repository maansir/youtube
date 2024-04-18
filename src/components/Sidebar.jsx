/* eslint-disable no-unused-vars */
import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // if(!isMenuOpen) return null;
  return (
    <div className={isMenuOpen?'sidebar':'sidebar item-block'}>
      <ul>
        <li className='active'><span><i className="fa-solid fa-house"></i></span><Link to="/">Home</Link></li>
        <li><span><i className="fa-solid fa-file-video"></i></span><a href="#">Shors</a></li>
        <li><span><i className="fa-solid fa-tv"></i></span><a href="#">Subsriptions</a></li>       
        <li><span><i className="fa-solid fa-house"></i></span><Link to="/watch">Watch</Link></li>
      </ul>
      <hr className='hrLine' />

      <h4>Subscriptions</h4>
      <ul>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s176-c-k-c0x00ffffff-no-rj' /></span><a href="#">Akshay Saini</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.googleusercontent.com/ytc/AIdro_kVVinqETxyU4zI2D5hsgxdB_DEaVQE1n04VPj-6Ql7PT4=s176-c-k-c0x00ffffff-no-rj-mo' /></span><a href="#">Yahoo Baba</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.ggpht.com/G42b4i9auAhu-cy3wi9IhLxmkfl2i_iokiVgHx32xsZ8I4ok6uzamWXUj16xzJmAGoq8fRfS1Q=s176-c-k-c0x00ffffff-no-rj-mo' /></span><a href="#">Roadsie Coder</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj' /></span><a href="#">Chai With Code</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj' /></span><a href="#">Thapa Technical</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj' /></span><a href="#">Akshay Saini</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s176-c-k-c0x00ffffff-no-rj' /></span><a href="#">Yahoo Baba</a></li>
      <li className='chanelFollow'><span><img alt='names' src='https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj' /></span><a href="#">Dummy User</a></li>   
      </ul>


      <hr className='hrLine' />

      <h4>Explore</h4>
      <ul>
         <li><span><i className="fa-solid fa-house"></i></span><a href="#">Trending</a></li>
        <li><span><i className="fa-solid fa-money-bill-trend-up"></i></span><a href="#">Shopping</a></li>
        <li><span><i className="fa-solid fa-headphones-simple"></i></span><a href="#">Music</a></li>       
        <li><span><i className="fa-solid fa-film"></i></span><a href="#">Movies</a></li>
        <li><span><i className="fa-solid fa-tower-broadcast"></i></span><a href="#">Live</a></li>       
        <li><span><i className="fa-solid fa-gamepad"></i></span><a href="#">Gaming</a></li>       
      </ul>

      
      <hr className='hrLine' />
      <ul>
        <li><span><i className="fa-solid fa-gear"></i></span><a href="#">Setting</a></li>
        <li><span><i className="fa-regular fa-flag"></i></span><a href="#">Report History</a></li>
        <li><span><i className="fa-solid fa-circle-question"></i></span><a href="#"> Help</a></li>       
        <li><span><i className="fa-solid fa-comment-medical"></i></span><a href="#"> Send Feedback</a></li>       
      </ul>
    </div>

  )
}

export default Sidebar;