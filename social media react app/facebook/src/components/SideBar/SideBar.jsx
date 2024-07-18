import "./sideBar.css" 
import { RssFeed,Chat,PlayArrow,People,Bookmark,QuestionMark,briefcase,CalendarMonthSharp,CastForEducation, BusinessCenterTwoTone, SchoolTwoTone, CalendarMonth } from "@mui/icons-material"
export default function SideBar() {
  return (
    <div className="sideBar">
    <div className="sideBarWrapper">
   
    </div>
    <ul className="sideBarList">
        <li className="sideBarListItem">
        <RssFeed className="sideBarIcon"/>
        <span className="sideBarListText">
            Feed
        </span>
        </li>

        <li className="sideBarListItem">
        <Chat className="sideBarIcon"/>
        <span className="sideBarListText">
            Chats
        </span>
        </li>

        <li className="sideBarListItem">
        <PlayArrow className="sideBarIcon"/>
        <span className="sideBarListText">
            Videos
        </span>
        </li>

        <li className="sideBarListItem">
        <People className="sideBarIcon"/>
        <span className="sideBarListText">
            Groups
        </span>
        </li>

        <li className="sideBarListItem">
        <Bookmark className="sideBarIcon"/>
        <span className="sideBarListText">
            BookMarks
        </span>
        </li>

        <li className="sideBarListItem">
        <QuestionMark className="sideBarIcon"/>
        <span className="sideBarListText">
            Questions
        </span>
        </li>


        <li className="sideBarListItem">
        <BusinessCenterTwoTone className="sideBarIcon"/>
        <span className="sideBarListText">
            Jobs
        </span>
        </li>

        <li className="sideBarListItem">
        <CalendarMonth className="sideBarIcon"/>
        <span className="sideBarListText">
            Events
        </span>
        </li>
        
        <li className="sideBarListItem">
        <SchoolTwoTone className="sideBarIcon"/>
        <span className="sideBarListText">
            Courses
        </span>
        </li>

    </ul>
    <div className="btnDiv">
      <button className="sideBarBtn">
        Show More
    </button>
    </div>
  
    <hr className="sideBarHr" />

    <ul className="sideBarFriendsList">
        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (3).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Joe Don
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (8).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Sara
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (4).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Michael
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (2).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Hussain
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (7).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Baber
         </span>
        </li>
        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (4).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Christ
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (2).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Jack ma
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (7).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Shaila
         </span>
        </li>
        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (4).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            Don Brad
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (2).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            John cena
         </span>
        </li>

        <li className="sideBarFriend">
         <img src="./assets/profilePictures/profile (7).jpg" alt="" className="friendProfile" />
         <span className="friendName">
            doll
         </span>
        </li>
    </ul>
    </div>
  )
}
