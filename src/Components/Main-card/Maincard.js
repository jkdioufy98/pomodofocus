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
            
            if(minTimer === 0 && secTimer === 0)
                alert('Time out !')

        }

    useEffect(() => {
        let tempo;
        if(start){
            tempo = setTimeout(() => {
                countDown()
            }, 1000)
        }
        else{
            clearTimeout(tempo);
        }
    })
    
  return (
    <div className='main-card'>
        <div className="nav">
            <h3>Pomodoro</h3>
            <h3>Short Break</h3>
            <h3>Long Break</h3>
        </div>
            <p style={{fontSize: '60px'}}>{timer}</p>
        <div className="start-btn">
        {
            start ? 
            <button className='start-btn' onClick={() => setStart(!start)}>STOP</button>
            :
            <button className='start-btn' onClick={() => setStart(!start)}>START</button>
        }
        </div>
    </div>
  )
}

export default Maincard;
