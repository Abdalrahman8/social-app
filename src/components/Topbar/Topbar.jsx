import "./Topbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Topbar() {
   return (
      <div className="topbarContainer">
         <div className="topbarLeft">
            {/* <span className="logo">Tetshbook</span> */}
            <Link to="/" className="logo link">
               Tetshbook
            </Link>
         </div>
         <div className="topbarCenter">
            <div className="searchbar">
               <SearchIcon className="searchIcon" />
               <input
                  placeholder="Search for friends, posts and videos"
                  className="searchInput"
               />
            </div>
         </div>
         <div className="topbarRight">
            {/* <div className="topbarLinks">
               <span className="topbarLink">
                  Profile
                  <Link to="/profile">Profile</Link>
               </span>
               <span className="topbarLink">Timeline</span>
            </div> */}

            <ul className="topbarLinks">
               <li className="topbarLink">
                  <Link to="/profile" exact className="link">
                     Profile
                  </Link>

                  <Link to="/register" className="link">
                     Logout
                  </Link>
               </li>
            </ul>

            <div className="topbarIcons">
               <div className="topbarIconItem">
                  <PersonIcon />
                  <span className="topbarIconBadge">1</span>
               </div>

               <div className="topbarIconItem">
                  <ChatIcon />
                  <span className="topbarIconBadge">2</span>
               </div>

               <div className="topbarIconItem">
                  <NotificationsIcon />
                  <span className="topbarIconBadge">1</span>
               </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
         </div>
      </div>
   );
}

export default Topbar;
