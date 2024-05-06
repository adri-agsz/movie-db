import {Header} from '../components/Header';
import { Outlet } from 'react-router-dom';

import React from 'react'

const PrivateRouter = () => {
  return (
    <>
        <div></div>
        <Outlet/>
        
    </>
  )
}

export default PrivateRouter
