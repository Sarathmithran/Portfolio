import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiC, SiFigma, SiMongodb, SiMui, SiNextdotjs, SiPostman, SiRedux, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import AnimatedSentence from './AnimatedSentence';
function Skills() {
  return (

    <div className='skillsGrandParent'>
      <AnimatedSentence>
      <div className='skillsParent'>
        <div><FaHtml5  className='icons'/></div>
        <div><FaCss3Alt className='icons'/></div>
        <div><FaBootstrap className='icons'/></div>
        <div><IoLogoJavascript className='icons'/></div>
        <div><FaReact className='icons react'/></div>
        <div><SiNextdotjs className='icons'/></div>
        <div><SiTypescript className='icons' /></div>
        <div><SiTailwindcss className='icons'/></div>
        <div><SiMui className='icons'/></div>
        <div><FaGitAlt className='icons' /></div>
        <div><SiRedux className='icons' /></div>
        <div><SiSass className='icons' /></div>
        <div><SiPostman className='icons' /></div>
        <div><SiC className='icons' /></div>
        <div><SiFigma className='icons' /></div>
      </div>
      </AnimatedSentence>
      

    </div>
   
  )
}

export default Skills