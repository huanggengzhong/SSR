import Link from 'next/link';
const Movieheader =()=>(
   <div className="movie-header">
       <style jsx>
          {`
              .movie-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
              }
              ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 15px 0;
                background-color: #1e2736;
                margin: 0;
              }
              li {
                list-style: none;
                line-height: 30px;
                height: 30px;
              }
              li a {
                color: white;
              }
              li a:hover {
                color: red;
              }
          `}
       </style>
       
       <ul>
           <li>
               <Link href="/movie/type?type=in_theaters"><a>正在热映</a></Link>
           </li>
           <li>
               <Link href="/movie/type?type=coming_soon"><a>即将上映</a></Link>
           </li>
           <li>
               <Link href="/movie/type?type=top250"><a>top250</a></Link>
           </li>
       </ul>
       
   </div> 
)

export default Movieheader;