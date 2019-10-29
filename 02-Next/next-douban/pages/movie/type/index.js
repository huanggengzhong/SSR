import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const Movietype = props => (
  <div className="movie-type">
    <h1>这是电影详情页</h1>
    <ul>
      {props.movieList.map(item => {
        return (
          <div key={item.id} className="movie-box">
            <Link href="">
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
  </div>
)

Movietype.getInitialProps = async function(context) {
  let res = await fetch(`http://localhost:3301/in_theaters`)
  let data = await res.json()
  console.log(data)
  return {
    movieList: data
  }
}
export default Movietype
