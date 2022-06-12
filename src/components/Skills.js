import React from 'react'
import Skill from './Skill'

function Skills() {
  return (
    <div className='skillContainer container'>
        <div className='cart'>
            <h1 className='underlined'>Skills </h1>
            <div className='grid'>
              <Skill skillName='HTML CSS JS' imageSource='src' />
              <Skill skillName='React Js' imageSource='src' />
              <Skill skillName='Adobe Ps Ai Pr XD ' imageSource='src' />
            </div>
        </div>
    </div>
  )
}

export default Skills