import "./topBar.css";
import { Search, Person , Chat ,Notifications} from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Diaries</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcons"/>

          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends, posts or videos"
          />
        </div>
      </div>
      <div className="topbarRight">
      <div>
      <span className="topbarLink">HomePage</span>
        <span className="topbarLink">Timeline</span>
      </div>
    
      
      <div className="topbarIcons">
        <div className="topbarIconsItem">
          <Person />
          <div className="topbarIconBadge">1</div>
        </div>

        <div className="topbarIconsItem">
          <Chat/>
          <div className="topbarIconBadge">2</div>
        </div>

        <div className="topbarIconsItem">
          <Notifications/>
          <div className="topbarIconBadge">1</div>
        </div>
        
      </div>
      <img src="./assets/profilePictures/profile-1.jpg" alt="" className="topbarImage" />
     </div>
    </div>
  );
}
