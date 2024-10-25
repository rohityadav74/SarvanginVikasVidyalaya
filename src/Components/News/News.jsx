import React, { useRef } from 'react'
import './News.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import tmember_1 from '../../assets/tmember-1.png'
import tmember_2 from '../../assets/tmember-2.png'
import tmember_3 from '../../assets/tmember-3.png'
import tmember_4 from '../../assets/tmember-4.png'

const News = () => {
    const slider = useRef();
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='news'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="team-info">
                        <img src={tmember_1} alt=""/>
                        <div>
                            <h3>Rohit Kumar</h3>
                            <span>Founder & CEO</span>
                        </div>
                    </div>
                    <p>We start this to help the student in many ways</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="team-info">
                        <img src={tmember_2} alt=""/>
                        <div>
                            <h3>Prashant Kumar</h3>
                            <span>Co-Founder</span>
                        </div>
                    </div>
                    <p>We start this to help the student in many ways</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="team-info">
                        <img src={tmember_3} alt=""/>
                        <div>
                            <h3>Hemant Himesh</h3>
                            <span>Member</span>
                        </div>
                    </div>
                    <p>We start this to help the student in many ways</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="team-info">
                        <img src={tmember_4} alt=""/>
                        <div>
                            <h3>Rajeev Kumar</h3>
                            <span>Member</span>
                        </div>
                    </div>
                    <p>We start this to help the student in many ways</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default News
