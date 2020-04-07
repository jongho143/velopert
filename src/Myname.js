import React, { Component } from 'react'

class Myname extends Component {

    // static defaultProps = {
    //     name: '기본이름'
    // }       => ***최신 자바스크립트 코드임***

  render() {
    return (
    <div>안녕하세요 저는 <b>{this.props.name}</b></div>
    )
  }
}

// Myname.defaultProps = {
//     name:'JONG HO'
// }            => 모던 자바스크립트 코드

export default Myname;