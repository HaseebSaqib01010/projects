import "./RightBar.css"

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/birthday.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            {""}
            <b>Hussain</b> and <b> 3 other friends </b>have a birthday today
          </span>
          <img src="./assets/ad.jpg" alt="" className="rightBarAd" />
          <h4 className="title">Online Friends</h4>
        <ul className="onlineFriendsList">
          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (6).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> John Carter</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (3).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName">Carter kalif</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (2).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> Rana Asif</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (8).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> Sara</span>
          </li>
        </ul>
        <ul className="onlineFriendsList">
          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (6).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> John Carter</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (3).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName">Carter kalif</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (2).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> Rana Asif</span>
          </li>

          <li className="rightBarFriend">
            <div className="profileImgContainer">
              <img src="./assets/profilePictures/profile (8).jpg" alt="" className="profileImg" />
              <span className="onlineBadge"></span>
            </div>
            <span className="userName"> Sara</span>
          </li>
        </ul>
        
        </div>
      </div>
    </div>
  )
}
