import React from 'react'
import './Projects.css'
import AnimatedSentence from './AnimatedSentence'

function Projects() {
  return (
    <div>
      <AnimatedSentence>
      <div className='projectsParent'>
        <div className='firstProject '>
        <h1>E-Commerce Application (React JS)</h1>
        <ul>
          <li>Developed an e-commerce application using React.js for the frontend and integrated it with Commerce.js for the backend. The application allows users to browse through products, add items to their cart etc.</li>
        </ul>
        <a href="https://github.com/Sarathmithran/E-Commerce-app-with-commerceJs"  className='links'>Github Repository</a>
        </div>

        <div className='secondProject '>
        <h1>E-Commerce Application (Next JS)</h1>
        <ul>
          <li>Developed an e-commerce application using Next.js for the frontend and integrated it with Commerce.js for the backend. The application allows users to browse through products, filter products, add items to their cart etc.</li>
        </ul>
        <a href="https://github.com/Sarathmithran/E-Commerce-App-NextJs" className='links'>Github Repository</a><br />
        <a href="https://shopee-nextjs.vercel.app" className='links'>See the deployed Site</a>
        </div>

        <div className='thirdProject '>
        <h1>Blood Donation App</h1>
        <ul>
          <li>Builted a blood donation application entirely on React.js for the frontend.</li>
        </ul>
        <a href="https://github.com/Sarathmithran/Blood-Donation-React-App" className='links'>Github Repository</a><br />
        <a href="https://blood-donation-react-app.vercel.app/" className='links'>See the deployed Site</a>
        </div>

        <div className='fourthProject '>
          <h1>Calculator</h1>
          <ul>
            <li>This sample calculator is a basic web application built using HTML, CSS, and JavaScript. It provides a simple user interface for performing arithmetic operations such as addition, subtraction, multiplication, and division.</li>
          </ul>
         <a href="https://github.com/Sarathmithran/Calculator" className='links'>Github Repository</a>
        </div>

      </div>
      </AnimatedSentence>
      
    </div>
  )
}

export default Projects