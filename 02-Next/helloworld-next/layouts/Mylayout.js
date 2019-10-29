import Mynav from '../components/Mynav'
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
