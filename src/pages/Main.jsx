import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Main = () => {
    const [openDraswer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <SideBar openDraswer={openDraswer}/>
            <div>Display mail</div>
        </>
    )
}

export default Main