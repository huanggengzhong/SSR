import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
class Classdata extends Component {
    static async getInitialProps(){
        const res =await fetch('http://localhost:3301/in_theaters')
        const data=await res.json();
        return {
            movieList:data
        }
    }
  render() {
    return (
      <div>
        <h1>类组件获取页面数据页面</h1>
        {this.props.movieList.map(item => {
          return <li key={item.id}>{item.title}</li>
        })}
      </div>
    )
  }
}

export default Classdata
