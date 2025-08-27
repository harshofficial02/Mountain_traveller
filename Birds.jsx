import React from 'react'
import './Birds.css'
import b1_1 from './b1_1.png'
import b2 from './b2.png'
import b3_1 from './b3_1.png'
import b4 from './b4.png' 
import swans from './swans.png'
import Frame from './Images/Frame.png'
import birds from './Images/birds.png'

function Birds() {
  return (
    <>
    <div className="outer">
      <div className="main_bird">
        <img src={b2} alt="" className='b2'/>
        <img src={swans} alt="" className='swans'/>
    
        <div className="left">
          <img src={b1_1} alt="" className='b1'/>
          <img src={b3_1} alt=""  className='b3'/>
        </div>
        <div className="middle">
          {/* <img src={b4} alt="" className='b4'/> */}
          <img src={birds} alt="" className='b5'/>
        </div>
      
        <div className="right">
          
          <div className="content2">
            <h1>BIRDS OF<br/>A FEATHER</h1>
            
            <p>Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and strong yet lightweight skeletons. Birds are endothermic (warm-blooded) animals.</p>
          </div>
          <div className="last">
            <img src={Frame} alt="" className='frame'/>
            {/* <img src={b1} alt="" className='last1'/> */}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Birds
