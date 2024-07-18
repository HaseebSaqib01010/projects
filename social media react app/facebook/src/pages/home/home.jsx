import SideBar from '../../components/SideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import TopBar from '../../components/topBar/topBar'
import "./home.css"
import Counter from '../../components/counter/counter';
export default function Home() {
  return (
    <>
  
  {/* <Counter/> */}
        <TopBar/>
        <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <RightBar/>
        </div> 
    </>  
  
  )
}


