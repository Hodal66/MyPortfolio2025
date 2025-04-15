import React from 'react'
import { FaPenRuler, FaRegMessage,FaRegLightbulb } from "react-icons/fa6";
function Skills() {
  return (
    <div>
      <div className='cardContainer'>
        <div>
        <FaPenRuler/>
        </div>
        <div>
            <h2>Web Design</h2>
            <p>120 Projects</p>
        </div>
      </div>
      <div className='cardContainer'>
        <div>
        <FaPenRuler/>
        </div>
        <div>
            <h2>Ui/Ux Design</h2>
            <p>30 Projects</p>
        </div>
      </div>
      <div className='cardContainer'>
        <div>
        <FaRegLightbulb />
        </div>
        <div>
            <h2>Web Research</h2>
            <p>240 Projects</p>
        </div>
      </div>
      <div className='cardContainer'>
        <div>
        <FaRegMessage/>
        </div>
        <div>
            <h2>Marketing</h2>
            <p>331 Prodect</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
