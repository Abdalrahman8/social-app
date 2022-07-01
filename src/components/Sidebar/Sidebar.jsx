import "./Sidebar.scss";

import { Users } from "../../DummyData";

import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import CloseFriends from "../CloseFriends/CloseFriends";

function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarWrapper">
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <RssFeedIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Feed</span>
               </li>

               <li className="sidebarListItem">
                  <ChatIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Chats</span>
               </li>

               <li className="sidebarListItem">
                  <SlowMotionVideoIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Videos</span>
               </li>

               <li className="sidebarListItem">
                  <GroupsIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Groups</span>
               </li>

               <li className="sidebarListItem">
                  <BookmarkIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Booksmarks</span>
               </li>

               <li className="sidebarListItem">
                  <QuestionAnswerIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Questions</span>
               </li>

               <li className="sidebarListItem">
                  <WorkIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Jobs</span>
               </li>

               <li className="sidebarListItem">
                  <EventIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Events</span>
               </li>

               <li className="sidebarListItem">
                  <SchoolIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Courses</span>
               </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
               {Users.map((user) => (
                  <CloseFriends key={user.id} user={user} />
               ))}
            </ul>
         </div>
      </div>
   );
}

export default Sidebar;
