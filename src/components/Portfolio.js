import React from 'react'
import Project from './Project'

function Portfolio() {
  return (
    <div className='portfolioContainer container'>
      <div className='cart'>
          <h1 className='underlined'>Portfolio</h1>
          <h3 className='grayColor'>Here are some of the projects i made</h3>
          <div className='grid'>
              <Project description='this is description of the project1'/>
              <Project description='this is description of the project2'/>
          </div>
        </div>
    </div>
  )
}

export default Portfolio