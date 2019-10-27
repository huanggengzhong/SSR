import Link from "next/link"
const Mynav=()=>{
    return (
        <div>
          <Link href={{pathname:"/next-route/teacher",query:{}}} >
            <button style={{color:'red'}}>去教师页面</button>
          </Link>
          <Link href={{pathname:"/next-route/student",query:{}}} >
            <button style={{color:'red'}}>去学生页面</button>
          </Link>
       
        </div>
      )
}
export default Mynav