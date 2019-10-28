//组件路由跳转
// 组件路由跳转:1.引入Link组件
// import Link from 'next/link'
//事件路由跳转;1.引入Router对象
// import Router from 'next/router'

//引入外部公共组件
// import Mynav from '../../components/Mynav'

// 引入布局组件
import Mylayout from './../../layouts/Mylayout'

const NextRoute = () => {
  return (
    <div>
      <div>
        {/* next路由学习
      <br /> */}
        {/*组件路由跳转: 2.使用 */}
        {/* <Link href="/next-route/teacher" >
        <button style={{color:'red'}}>去教师页面</button>
      </Link> */}

        {/* <Link href={{pathname:"/next-route/teacher",query:{id:1}}} >
        <button style={{color:'red'}}>去教师页面</button>
      </Link> */}
        {/* <p>
      <button onClick={()=>{
        // Router.push("/next-route/student")
        // 也可以跟对象写法
        Router.push({pathname:"/next-route/student",query:{id:1}})
      }}>去学生页面</button>
      </p> */}
      </div>
      {/* <Mynav /> */}

      {/* <Mylayout>
        <p>next路由主页</p>
      </Mylayout> */}
      <p>next路由主页</p>

    </div>
  )
}

export default NextRoute
