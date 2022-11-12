import "./navbar.scss"
import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import netflixIcon from "../../assets/svg/netflix-icon.svg"
import avatar from "../../assets/svg/avatar.svg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (Window.onscroll = null);
  };
  
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            alt="netflix-logo"
            src={netflixIcon}
          ></img>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>Kid</span>
          <Notifications className="icon"/>
          <img alt="avatar" src={avatar} height="30px"></img>
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;