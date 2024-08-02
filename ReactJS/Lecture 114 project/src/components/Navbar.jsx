import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='p-2 bg-indigo-700 flex justify-around text-white'>
                <div className='logo'>
                    <span className='font-bold'>iTask</span>
                </div>
                <ul className='flex gap-8'>
                    <li className='cursor-pointer hover:font-semibold'>Home</li>
                    <li className='cursor-pointer hover:font-semibold'>Your Tasks</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar