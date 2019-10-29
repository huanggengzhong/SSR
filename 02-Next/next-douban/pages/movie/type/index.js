import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router'
import Link from 'next/link'
const Movietype = withRouter(props => (
  <div className="movie-type">
    <h1>这是电影详情页</h1>
    <ul>
      {props.movieList.map(item => {
        return (
          <div key={item.id} className="movie-box">
            {/* 提示:地址里的type值获取方式可以使用withRouter高阶组件获取 */}
            <Link href={`/movie/detail?id=${item.id}&type=${props.router.query.type}`}>
              <div>
                  <img src={item.img} alt={item.title}></img>
                  <h4>{item.title}</h4>
                  <p>评分:{item.rating}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </ul>
    <style jsx>
      {`
      .movie-type {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .movie-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        padding: 10px 0;
        width: 140%;
        box-shadow: 0 0 10px #bbb;
        
      }
      .movie-box:hover {
        box-shadow: rgba(0,0,0,0.3) 0px 19px 60px;
      }
      `}
    </style>
  </div>
))

Movietype.getInitialProps = async function(context) {
  let res = await fetch(`http://localhost:3301/${context.query.type}`)
  // console.log(context.query.type);
  
  let data = await res.json()
  console.log(data)
  return {
    movieList: data
  }
}
export default Movietype
