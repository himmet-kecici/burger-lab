import React, { useState } from 'react'
import Navbar from '../Navbar/navbar.components'
import Sidebar from '../Sidebar/sidebar.component'
import { HeadingContainer, HeadingItems, HeadingContent, HeadingH1, HeadingP, HeadingBtn } from './heading.styles'
const Heading = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <HeadingContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeadingContent>
                <HeadingItems>
                    <HeadingH1>The Best Hamburger</HeadingH1>
                    <HeadingP>Ready in 60 seconds</HeadingP>
                    <HeadingBtn>Place Order</HeadingBtn>
                </HeadingItems>
            </HeadingContent>
        </HeadingContainer>
    )
}

export default Heading