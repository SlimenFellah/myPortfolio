import React from 'react'

function Skill(props) {
  return (
    <div>
        <div className='skillImage'>
            <img src={require("../assets/htmlcssjs.webp")} />
        </div>
        <h3>{props.skillName}</h3>
    </div>
  )
}

export default Skill