import React from 'react';
import usericon from '../images/usericon.png'

const navbar = () => {
    return (
        <>
            <nav id = "navigation-bar" className='py-3 px-20 flex justify-between items-center border-b-2 border-slate-300'>
                <span className='font-mono text-3xl '>MemoRy</span>
                <input type="text"  className='w-72 h-7 bg-slate-50 outline-slate-200 border rounded-lg px-3' placeholder='Search'/>
                <div className='w-64'>
                    <ul className='flex justify-between font-mono'>
                        <li className='cursor-pointer hover:bg-slate-100'>Home</li>
                        <li className='cursor-pointer hover:bg-slate-100'>About</li>
                        <li className='cursor-pointer hover:bg-slate-100'>Contact</li>
                        <li className='cursor-pointer hover:bg-slate-100 w-6 h-6 '><img src={usericon} alt="profile" /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar;