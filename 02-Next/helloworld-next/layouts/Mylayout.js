import Mynav from '../components/Mynav'
import Myfooter from '../components/Myfooter'
const Mylayout = (props) => {
  return (
    <div>
      <Mynav />
      {props.children}
      {/* <Myfooter/> */}
    </div>
  )
}
export default Mylayout
