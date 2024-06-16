import React, { useEffect, useState } from 'react'
import Display from './Display'

const Countdown = () => {
    const endTime=new Date('June 27,2030 22:45:45').getTime()
    const [currentTime,setCurrentTime]=useState(new Date().getTime())
    // console.log(endTime)
    // console.log(currentTime)
    const gap=endTime-currentTime
    // console.log(gap)


    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor( (gap % days) / hours);
    const remainingMinutes = Math.floor( (gap % hours) / minutes);
    const remainingSeconds = Math.floor( (gap % minutes) / seconds);

    useEffect(()=>{
      setTimeout(()=>setCurrentTime(new Date().getTime()),1000);
    },[currentTime])
  return (
    <div>
       <center>
        <Display days={remainingDays} 
        hours={remainingHours} minutes={remainingMinutes}
        seconds={remainingSeconds} />
</center>
      
    </div>
  )
}

export default Countdown
