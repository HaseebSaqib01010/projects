import "./share.css";
import {EmojiEmotions, Label, PermMedia, Room, SubtitlesTwoTone} from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
       <div className="shareTop">
        <img src="./assets/profilePictures/profile (3).jpg" alt="" className="shareProfile" />
        <input type="text" placeholder="What's in your mind Joe?" className="shareInput" />
       </div>
       <hr className="shareHr" />
        
       <div className="shareBottom">
        <div className="shareOptionsContainer">
            <div className="shareOptions">
            <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionsText">
                    Photo or Videos
                </span>
                
            </div>

            <div className="shareOptions">
            <Label  htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionsText">
                    Tags
                </span>
               
            </div>

            <div className="shareOptions">
            <Room  htmlColor="green" className="shareIcon"/>
                <span className="shareOptionsText">
                    Locations
                </span>
             
            </div>
            
            <div className="shareOptions">
            <EmojiEmotions htmlColor = "goldenrod"className="shareIcon"/>
                <span className="shareOptionsText">
                    Feelings
                </span>
           
            </div>
            <button className="shareBtn">Share</button>
        </div>
    
       </div>
      </div>
    </div>
  )
}
