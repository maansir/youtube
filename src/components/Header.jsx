import {useDispatch} from 'react-redux';
import { toggleMenu } from './utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from './constant';

const Header = () => {
const [searchqouery, setSearchquery] =useState('');
const [suggestion, setSuggestion] =useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
      dispatch(toggleMenu());
  };

  useEffect(()=>{
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchqouery]);

const getSearchSuggestions = async () =>{
  const data = await fetch(YOUTUBE_SEARCH_API+searchqouery);
  const json = await data.json();
  setSuggestion(json[1]);
}
useEffect(() => {
  const handleBodyClick = (event) => {
    setShowSuggestions(!!event.target.closest('.searchbar'));
  };

  document.body.addEventListener('click', handleBodyClick);

  return () => {
    document.body.removeEventListener('click', handleBodyClick);
  };
}, []);
  return (
    <div className="header_container">
      <div className="Logo">
        <i className="fa-solid fa-bars" onClick={() => toggleMenuHandler()}></i>
        <a href="/">
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="logo"
        />
        </a>
      </div>

      <div className="center_search">
      <div className="searchbar">
        <input type="search" placeholder="Search..."
        value={searchqouery}
        onChange={(e)=>setSearchquery(e.target.value)}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <ul className={showSuggestions === false || searchqouery.length==0 ? 'hide_body_click' : ''}>
          {
            suggestion.map(ele => <li key={ele}><i className="fa-regular fa-clock"></i> {ele}</li>)
          }
         
        </ul>
      </div>
      <button className="microphone">
        <i className="fa-solid fa-microphone"></i>
      </button>
      </div>

      <div className="profile">
        <i className="fa-solid fa-video-slash"></i>
        <i className="fa-regular fa-bell"></i>
        <i className="fa-regular fa-user user_info"></i>
      </div>
    </div>
  );
};

export default Header;
