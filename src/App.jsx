// import Basic from '../class-components/Basic'
// import './App.css'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Conditional from './embedding-expression/conditional'
// import Calling_function from './embedding-expression/Calling_function'
// import Welcome from './embedding-expression/Welcome'


// function App() {

//   return (
//     <>
    {/* ---------------------------Embedding Expression---------------- */}
      {/* <Welcome /> */}
      {/* <Calling_function/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/> */}

//      </>
//   )
// }

// export default App




// {/* -------------------class Component------------- */}

import React, { Component } from 'react'
import UnMounting from '../class-components/live-cycle-methods/UnMounting'
// import Updating from '../class-components/live-cycle-methods/Updating'
// import Mounting from '../class-components/live-cycle-methods/mounting'
// import Counter2 from '../class-components/counter2'
// import UsingProps from '../class-components/UsingProps'
// import Counter from '../class-components/Counter'
// import Basic from '../class-components/Basic'

export default class App extends Component {
  render() {
    return (
      <>
      {/* <Basic/> */}
      {/* <UsingProps name="shadiya"/> */}
      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Mounting/> */}
      {/* <Updating/> */}
      <UnMounting/>
      </>
    )
  }
}

