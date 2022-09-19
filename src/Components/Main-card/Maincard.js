import React, { useEffect, useRef, useState } from 'react'
import './Maincard.css'

const Maincard = () => {
    
    const [timer,setTimer] = useState('25:00')
    const [start,setStart] = useState()
    const [startColor,setStartColor] = useState('')
    const ref = useRef()

    const countDown = () => {

            let minTimer = +timer.split(':')[0]
            let secTimer = +timer.split(':')[1]

            if(secTimer === 0){
                if(minTimer > 0){
                    secTimer = 59;
                    minTimer--;
                }
            }
            else
                secTimer--;

            setTimer(`${minTimer}:${secTimer}`)
            
            if(minTimer === 0 && secTimer === 0)
                alert('Time out !')

    }

    useEffect(() => {
        if(start){
            ref.current = setTimeout(() => {
                countDown()
            }, 1000)
        }
    })
    
  return (
    <div className='main-card'>
        <div className="nav">
            <h3 onClick={() => {setStart(false); clearInterval(ref.current); setTimer('25:00'); setStartColor('#D95550'); document.body.style = 'background-color: #D95550; transition: 0.4s'}}>Pomodoro</h3>
            <h3 onClick={() => {setStart(false); clearInterval(ref.current); setTimer('05:00'); setStartColor('#4C9195'); document.body.style = 'background-color: #4C9195; transition: 0.4s'}}>Short Break</h3>
            <h3 onClick={() => {setStart(false); clearInterval(ref.current); setTimer('15:00'); setStartColor('#457CA3'); document.body.style = 'background-color: #457CA3; transition: 0.4s'}}>Long Break</h3>
        </div>
        <div className="time-container">
            <p>{timer}</p>
        </div>

        <div className="start-btn">
        {
            start ? 
            <button style={{color: `${startColor}`}} className='start-btn' onClick={() => setStart(!start)}>STOP</button>
            :
            <button style={{color: `${startColor}`}} className='start-btn' onClick={() => setStart(!start)}>START</button>
        }
        </div>
    </div>
  )
}

export default Maincard;
