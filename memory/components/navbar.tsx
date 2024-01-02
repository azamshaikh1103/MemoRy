import React from 'react';

const navbar = () => {
    return (
        <>
            <nav id = "navigation-bar" className='bg-slate-300 h-10 w-10'>
                <div id="logo-main"></div>
                <div id="menu-tabs">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar;