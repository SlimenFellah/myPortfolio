import React from 'react'

function Contact() {
  return (
    <div className='contactContainer container'>
      <div className='cart'>
            <h1 className='underlined'>Contact</h1 >
              <div className='flex'>
                <div className='subCart sendMsg'>
                    <h2>Send me a message</h2>
                    <h4 className='grayColor'>(avaliable soon)</h4>
                    <form>
                        <label>Name :</label>
                        <input/>
                        <label>Email :</label>
                        <input/>
                        <label>Subject :</label>
                        <input/>
                        <label>Message :</label>
                        <textarea />
                        <button>Send</button>
                    </form>
                </div>
                <div className='subCart'>
                    <h1>Get in touch :</h1>
                    <div className='cordon' > <img src={require("../assets/placeholder.png")} /> <p>Oran,Algeria</p></div>
                    <div className='cordon'> <img src={require("../assets/phone.png")} /> <p>+213541640428 </p></div>
                    <div className='cordon'> <img src={require("../assets/send.png")} /> <p>sa.fellah@esi-sba.dz</p></div>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Oran,Algeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a><br/>
                    <a href="https://www.embedgooglemap.net"></a></div></div>
                </div>
              </div>
       </div>
       <br/>  
      <h3> Slimene Fellah ©2022 </h3>
    </div>
  )
}

export default Contact