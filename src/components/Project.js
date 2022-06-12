import React from 'react'

function Project(props) {
  return (
    <div className='projetContainer'>
        <div className='projectImage'>
            <p>{props.title}</p>
            <img src={require("../assets/projects/weather.JPG")} />
        </div>
        <p>{props.description}</p>
        <div>
            <button className='btn'>Demo</button>
            <button className='btn'>Source</button>
        </div>
    </div>
  )
}

export default Project