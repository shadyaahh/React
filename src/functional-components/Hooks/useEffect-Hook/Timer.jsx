import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setseconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() =>{
              setseconds((s) => s + 1);
        },1000);
        //setIntervel creates a tomer that runs every 1000 milliseconds (1 second)
        //cleanup function (unmount)
        return () => clearInterval(interval);


    }, []);//empty dependancy -  run once on mount

    return (
        <div>
            <p>Timer : {seconds} seconds</p>
        </div>
    )
}

export default Timer
