import React from 'react'
import './news.css'
import { FaBars, FaImage, FaUsers, FaVideo } from 'react-icons/fa'
import gsap from 'gsap';



import { useEffect } from 'react';

function News() {
    useEffect(() => {
        gsap.fromTo('.news_text',
            {
                // x: -300,
                opacity: 0,
                duration: 1,
                scale: 0.5,
                ease: 'power3.out',
            },
            {
                x: 0,
                // rotation: 2520, // 3 full rotations while moving in
                opacity: 1,
                duration: 1.5,
                scale: 1,
                ease: 'power3.out',
                delay: 0.5,
            }
        );
    }, []);
    
    
    return (
        <>
            <div className="news_main">
                <div className="news_left">
                    <div className="news_text">
                    <h1>THE WILD</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente sit nemo reprehenderit praesentium rem illum velit enim totam. Debitis accusamus dignissimos earum perferendis officia cupiditate praesentium. Nesciunt, dolorem sint!</p>
                    </div>
                </div>

                <div className="news_right">
                    <h1>BRITISH COULMBIA</h1>
                    <h2>CANADA </h2>
                    
                    <div className="news_nav">
                        <ul>
                            <li>
                                <FaBars />
                            </li>
                            <li>
                                <FaUsers />
                            </li>
                            <li>
                                <FaVideo />
                            </li>
                            <li>
                                <FaImage />
                    
                            </li>
                        </ul>
                    </div>
                    <div className="news_content">
                        <h3>NATIONAL PARKS IN B.C.</h3>
                        <p>British Columbia is home to some of the most stunning national parks in Canada. From the rugged mountains of Yoho National Park to the lush rainforests of Pacific Rim National Park Reserve, there is something for everyone to enjoy. Whether you're looking for hiking trails, wildlife viewing, or simply a place to relax and take in the natural beauty, B.C.'s national parks have it all.</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2925627.1411830666!2d-107.177320379724!3d58.058186346654516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCanada%20parks%20in%20B.C.!5e0!3m2!1sen!2sin!4v1745149793077!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default News
