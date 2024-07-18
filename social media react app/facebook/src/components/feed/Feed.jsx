import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import { Posts } from "../../pages/home/dummyData"
export default function Feed() {
  console.log("Posts>>",Posts)
  return (
    <div className="feed">
    <div className="feedWrapper">
        <Share/>
        {/* <Post/> */}
        { Posts.map((p)=>(
        <Post key={p.id} posts={p}/> 
         ) )}
        

    </div>
    </div>
  )
}
