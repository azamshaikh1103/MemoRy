import React from 'react';

const navbar = () => {
    return (
        <>
            <nav id = "navigation-bar" className='py-3 px-20 flex justify-between items-center border-b-2 border-slate-300'>
                <span className='font-mono text-3xl '>MemoRy</span>
                <div className='w-44'>
                    <ul className='flex justify-between font-mono'>
                        <li className='cursor-pointer hover:bg-slate-100'>Home</li>
                        <li className='cursor-pointer hover:bg-slate-100'>About</li>
                        <li className='cursor-pointer hover:bg-slate-100'>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar;