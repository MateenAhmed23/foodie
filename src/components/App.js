import React from 'react'
//import {BrowserRouter, Route} from 'react-router-dom'

import Form from './formFoodSelect'
import AddDeal from './AddDeal'


import menuData from '../data/menuData'
import Menu from './OptionsDisplay'


import NavBar from './navbar'
import Route from './Route'
// function App() {
//     return (
//         <div className='container'>
//             <Form />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div className='container'>
//             <AddDeal />
//         </div>
//     )
// }


// function App() {
//     return (
//       <main>
//           <NavBar />
//         <section className="menu section">
//           <div className="title">
//             <h2>Here are your options</h2>
//             <div className="underline"></div>
//           </div>
//           <Menu items={menuData} />
//         </section>
//       </main>
//     );
//   }

function App(){
    return(
        <>
            <NavBar />
            <div className="container">
                <Route path="/">
                    <Form />
                </Route>
                <Route path="/AddNew">
                    <AddDeal />
                </Route>
            </div>
        </>
    )
}

export default App
