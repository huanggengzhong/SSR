import fetch from 'isomorphic-unfetch'
const FetchTest = props => {
  return (
    <div>
      <h1>获取页面数据页面</h1>
      {props.movieList.map(item => {
        return <li key={item.id}>{item.title}</li>
      })}
    </div>
  )
}
FetchTest.getInitialProps = async function(context) {
    console.log(context);
    
  let res = await fetch('http://localhost:3301/in_theaters') //返回的是Promise对象

  let data = await res.json() //要转化成json,也转化成同步
  console.log(data)
  //getInitialProps方法必须返回一个对象.这样在组件中就可以直接使用props访问到下面的对象
  return {
    movieList: data
  }
}

export default FetchTest
