import React from 'react'
import Cards from './Cards';
import Promotion from './Promotion';
import { Route, Routes } from 'react-router-dom';
import Address from './Address';
import Login from './Login';
import FeedbackBox from './FeedbackBox'
import Custom from './Custom';


const Menu = () => {
  return (
    <div className="Menu">
<br /><br />
      <Cards/>
<br /><br />      
      <Promotion/>
<br />
      
      <Routes>
      <Route path='/address' element={<Address/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/custom' element={<Custom/>}/>
      </Routes>
    </div> 
  )
}

export default Menu