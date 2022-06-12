import React from 'react'

function Main() {
  return (
    <div className='mainContainer'>
        <div className='navBar'>
            <div className='col1'>
                <a><h2 className='underlined'>Slimene</h2></a>
            </div>
            <div className='col2' >
                <div > <img className='menuImage' alt='menuImage' src={require("../assets/burgerMenu.png")}/> </div>
                <div className='navList'>
                    <img className='exitMenuImage' alt='menuImage' src={require("../assets/burgerMenu.png")}/>
                    <a href='#main'>Home </a>&nbsp;&nbsp;
                    <a href='#brief'>Brief </a>&nbsp;&nbsp;
                    <a href='#skills'> Skills </a>&nbsp;&nbsp;
                    <a href='#portfolio'>Portfolio </a>&nbsp;&nbsp;
                    <a href='#contact'>Contact </a>
                </div>
            </div>
        </div>
        <div className='mainText'>
            <h1>I am slimene Fellah</h1>
            <h2 className='underlined'>Front End developper</h2>
        </div>
    </div>
  )
}

export default Main