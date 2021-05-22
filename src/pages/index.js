import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import HeroSection from '../components/HeroSection'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection />
        </>
    )
}

export default Home