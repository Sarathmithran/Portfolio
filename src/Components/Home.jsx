import React from 'react'
import './Home.css'
import image from '../Assets/sarath.png'
import TextSpan from './TextSpan';
import { FaDev, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Home() {

  const me = `I'm Sarath`.split('')
  const dev = `FRONTEND DEVELOPER`.split('')

  return (
    <div className='home' >
      
      <div className='name-container'>
          <div>
            {me.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>

          <div >
            {dev.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>
      </div>

      <div className='imgDiv'>
            <div className='imgFit'>
              <img src={image} alt="Image" className='photo' />
            </div>
            <div>
              <ul>

                <li >
                  <a href="https://www.linkedin.com/in/sarathmithran">
                  <FaLinkedin />
                  </a>
                
                </li>

                <li>
                  <a href="https://github.com/Sarathmithran">
                  <FaGithub />
                  </a>
                
                </li>

                <li>
                  <a href="https://www.instagram.com/forscher._/">
                  <FaInstagramSquare />
                  </a>
                
                </li>
                <li>
                  <a href="https://twitter.com/sarath_mithran">
                  <FaTwitter />
                  </a>
                
                </li>
                <li>
                  <a href="https://dev.to/sarath_mithran">
                  <FaDev />
                  </a>
                
                </li>
              </ul>
            </div>
            
      </div>

    </div>
  )
}

export default Home