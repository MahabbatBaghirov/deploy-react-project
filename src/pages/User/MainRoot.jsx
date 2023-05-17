import React from 'react'
import UserNavbar from '../../components/User/Navbar';
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    </>
  )
}

export default MainRoot