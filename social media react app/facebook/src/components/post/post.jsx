import { MoreVert } from "@mui/icons-material"
import "./post.css" 
import {Users} from "../../pages/home/dummyData" 
export default function Post({posts}) {
    const user = Users.filter(u=>u.id===1)
    console.log(Users[4].username)
    return (

    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u) => u.id===posts.userId)[0].profilePicture} alt="" className="postPicture"/>
                <span className="postUsername">
                {Users.filter((u)=>u.id ===posts.userId)[0].username}
                </span>
                <span className="postDate">
                    {posts.date}
                </span>
          
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
             <span className="postText">
              {posts?.desc}
              </span>
              <img src={posts.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
        <div className="postBottomLeft">
            <img src="./assets/socialIcons/like.png" alt="" className="postLike" />
            <img src="./assets/socialIcons/love.jpeg" alt="" className="postLove" />
           
            <span className="likeHistory">{posts.like}</span>
        </div>
          <div className="comment">
          {posts.comment}   comments
          </div>
        </div>
    </div>
      
    </div>


  )
}
