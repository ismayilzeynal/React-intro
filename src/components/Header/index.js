import React from 'react';
import Navbar from '../Navbar';

function Header() {
    return (
        <>
            <Navbar />
            <h2>
                something in header, but not Navbar
            </h2>
        </>
    )
}

export default Header