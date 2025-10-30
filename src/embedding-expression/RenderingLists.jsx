import React from 'react'

const RenderingLists = () => {

  const fruits = ["apple", "banana", "mango"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderingLists
