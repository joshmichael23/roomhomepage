import React from 'react'

function Overlay(props) {
  return (
    <div id="overlay" className={`${props.openMobile ? 'mobile' : ''}`}></div>
  )
}

export default Overlay