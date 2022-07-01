import "./Share.scss";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoodIcon from "@mui/icons-material/Mood";

export default function Share() {
   return (
      <div className="share">
         <div className="shareWrapper">
            <div className="shareTop">
               <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="shareProfileImg"
               />
               <input
                  placeholder="What is in your mind ..."
                  type="text"
                  className="shareInput"
               />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
               <div className="shareOptions">
                  <div className="shareOption">
                     <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                     <span className="shareIconText">Photo or Video</span>
                  </div>

                  <div className="shareOption">
                     <LabelIcon htmlColor="blue" className="shareIcon" />
                     <span className="shareIconText">Tag</span>
                  </div>

                  <div className="shareOption">
                     <LocationOnIcon htmlColor="green" className="shareIcon" />
                     <span className="shareIconText">Location</span>
                  </div>

                  <div className="shareOption">
                     <MoodIcon htmlColor="gold" className="shareIcon" />
                     <span className="shareIconText">Feeling</span>
                  </div>
               </div>
               <button className="shareButton">Share</button>
            </div>
         </div>
      </div>
   );
}
