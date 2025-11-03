import React from 'react'

const UseState = () => {
    const [count, setcount] =UseState(0); //inital valure
  return (
    <div>
      <p>count :{count}</p>
      <button onClick={()=>setcount(count+1)}>Increment</button> 
      {/* state is a internal data store that belongs to a specific component, and it can be chanced over time */}
    </div>
  )
}

export default UseState
