import React from 'react'
import './herostyle.css'
import Frame from "./images/Frame.png";
import Tree_1 from "./images/Tree_1.png";
import Tree_2 from "./images/Tree_2.png";
import 'animate.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';




import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(['.birds1',],
    //   {
    //     // y: 400,
    //     opacity: 0,
    //     duration: 0.2,
    //     scale: 0.5,
    //     ease: 'power3.out',
    // },
    // {
    //     // y: 0,
    //     // rotation: 2520, // 3 full rotations while moving in
    //     opacity: 1,
    //     duration: 0.5,
    //     scale: 1,
    //     ease: 'power3.out',
    //     delay: 0.2,
      {
        scrollTrigger: {
          y: 100,
          opacity: 1,
          duration: 2,
          trigger: '.birds1',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          markers: false,
        },}
    // }
  );

    gsap.fromTo(['.birds2',],
      {
        // y: 400,
        opacity: 0,
        scale: 0.,
        ease: 'power3.out',
    },
    {
        // y: 0,
        // rotation: 2520, // 3 full rotations while moving in
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: 'power3.out',
        delay: 1,
    }
  );

    gsap.fromTo(['.tree1',],
      {
        // y: 400,
        opacity: 0,
        scale: 0.5,
        ease: 'power3.out',
    },
    {
        // y: 0,
        // rotation: 2520, // 3 full rotations while moving in
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: 'power3.out',
        delay: 0.5,
    }
  );

    gsap.fromTo(['.tree1_1',],
      {
        // y: 400,
        opacity: 0,
        scale: 0.5,
        ease: 'power3.out',
    },
    {
        // y: 0,
        // rotation: 2520, // 3 full rotations while moving in
        opacity: 1,
        duration: 1.5,
        scale: 1,
        ease: 'power3.out',
        // delay: 2,
    }
  );
  gsap.fromTo(['.tree2',],
    {
      // y: 400,
      opacity: 0,
      duration: 1,
      scale: 0.5,
      ease: 'power3.out',
  },
  {
      // y: 0,
      // rotation: 2520, // 3 full rotations while moving in
      opacity: 1,
      duration: 1.5,
      scale: 1,
      ease: 'power3.out',
      // delay: 2.5,
  }
);

gsap.fromTo(['.tree3',],
  {
    // y: 400,
    opacity: 0,
    duration: 1,
    scale: 0.5,
    ease: 'power3.out',
},
{
    // y: 0,
    // rotation: 2520, // 3 full rotations while moving in
    opacity: 1,
    duration: 1.5,
    scale: 1,
    ease: 'power3.out',
    // delay: 3,
}
);

gsap.fromTo(['.frame1',],
  {
      // y: 400,
      opacity: 0,
      duration: 1,
      scale: 0.5,
      ease: 'power3.out',
  },
  {
      // y: 0,
      // rotation: 2520, // 3 full rotations while moving in
      opacity: 1,
      duration: 1.5,
      scale: 1,
      ease: 'power3.out',
      // delay: 3.5,
  }
);


}, []);

  return (
    <div className="main_hero">
    <div className="div">
      <div className="hero" style={{overflow: "hidden"}}>
        <div className="content">
            <h1 class="animate__animated animate__fadeInLeft">ENTER THE<br/> WORLD</h1>
            <p class="animate__animated animate__fadeInLeft">That you may see from whence all this error of those who accuse pleasure and praise pain is born, I will open the whole matter, and I will explain the very things which were said by that discoverer of truth and, as it were, the architect of the blessed life. </p>
        </div>
        <div className="birds1">
                <img src={Frame} alt="" />
                </div>
        

        <div className="frame">
          
            <div className="frame1">
                <div className="birds2">
                <img src={Frame} alt="" />
                </div>
            </div>

            <div className="tree1" >
                <img src={Tree_1} alt="" />
            </div>
            <div className="tree1_1">
                <img src={Tree_1} alt="" />
            </div>


            <div className="tree2">
                <img src={Tree_2} alt="" />
             </div>
             <div className="tree3">
                <img src={Tree_2} alt="" />
             </div>

        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Hero
