import Son from './../../components/Son'

const Teststyle=()=>(
    <div>
        <h1>style-jsx演示</h1>
        <Son/>
        <style jsx>
       
            {`
            h1{
                color:red;
            }
            `}
        </style>
        {/* jsx加了之后,Son组件样式不会生效 */}
    </div>
)
export default Teststyle;