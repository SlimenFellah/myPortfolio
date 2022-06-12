import React from 'react'

function Brief() {
  return (
    <div className='briefContainer container'>
        <div className='cart'>
                <h1 className='underlined'>Brief</h1>
                <div className='flex'>
                    <div className='colm1'>
                        <img className='myImage' alt='myImage' src={require("../assets/myPicture.jpeg")}/>
                    </div>
                    <div className='colm2'>
                        <h3>Slimene FELLAH<br/> 20 years old, computer science student and front end developper.</h3>
                        <button className='btn'>SEE MY RESUME (CV)</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Brief