// Movielayout组件
import Movieheader from './../components/Movieheader'
const Movielayout=(props)=>(
    <div className="movie-layout">
        {/* 这里放我们的全局导航 */}
        <Movieheader/>
       {props.children} 
       <style >
           {`
           .movie-layout{
               margin-top:60px;
           }
           `}
       </style>
    </div>
)
export default Movielayout;