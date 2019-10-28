// import Mynav from '../../../components/Mynav'
// import Mylayout from './../../../layouts/Mylayout'
import Link from 'next/link'
const teacherList = [
  { name: 'teacher1', id: 1 },
  { name: 'teacher2', id: 2 },
  { name: 'teacher3', id: 3 }
]
const Teacher = () => {
  return (
    <div>
      {/* <Mynav/> */}
      {/* <Mylayout>
                <p> teacher页面</p>
            </Mylayout> */}
      <p> teacher页面</p>
      <ul>
        {teacherList.map(item => {
          return (
            <li key={item.id}>
              <Link as={`/next-route/teacher/${item.id}`} href={`/next-route/teacher/detail?id=${item.id}`}>
              <a>{item.name}</a>
            </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Teacher
