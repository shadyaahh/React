import React from 'react'

const Calling_function = () => {
    function getGreeting(name){
        return`Hello, ${name}`;
    }

    function Greeting(){
        return <h2>{getGreeting("shadiya")}</h2>
    }
  return (
    <div>
      <Greeting/>
    </div>
  )
}

export default Calling_function
