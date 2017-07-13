import React from 'react'
import styles from './index.styl'

export default class Loading extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div className="loading-wrapper">
        <div className="loading-inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}