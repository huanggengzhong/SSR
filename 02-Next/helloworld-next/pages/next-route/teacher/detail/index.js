import  {withRouter} from 'next/router';

const Detail=withRouter((props)=>{
    console.log(props);
    
    return (
        <div>
            这是{props.router.query.id}老师详情页面
        </div>
    )
})
export default Detail;