import React, { useEffect, useState } from 'react'
import './Maincard.css'

const Maincard = () => {
    
    const [timer,setTimer] = useState('25:00')
    const [start,setStart] = useState()

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

    }

    useEffect(() => {
        if(start){
            setTimeout(() => {
                countDown()
            }, 1000)
        }
    })
    
  return (
    <div className='main-card'>
        <div className="nav-panel">
            <h3>Pomodoro</h3>
            <h3>Short Break</h3>
            <h3>Long Break</h3>
        </div>
        <div className="time-container">
            <p>{timer}</p>
        </div>
        <div className="start-btn">
            <button className='start-btn' onClick={() => setStart(true)}>START</button>
        </div>
    </div>
  )
}

export default Maincard;