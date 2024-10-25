import React from 'react'
import './Programs.css'
import course_1 from '../../assets/course-1.jpg'
import course_2 from '../../assets/course-2.jpg'
import course_3 from '../../assets/course-3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={course_1} alt=""/>
        <div className="caption">
        <p>Academics</p>
        </div>
        
      </div>
      <div className='program'>
        <img src={course_2} alt=""/>
        <div className="caption">
        <p>Foundation</p>
        </div>
       
      </div>
      <div className='program'>
        <img src={course_3} alt=""/>
        <div className="caption">
        <p>NEET/JEE</p>
        </div>
        
      </div>
    </div>
  )
}

export default Programs
