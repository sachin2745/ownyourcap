'use client';
import React, { useState } from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <>
            <AdminNavbar />
            {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
            {children}
        </>
    )
}

export default Layout