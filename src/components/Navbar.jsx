import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between bg-slate-700 text-white py-2'>
                <div className="logo">
                    <span className='font-bold text-xl mx-8'>Togo-Ogre</span>
                </div>
                <ul className="flex w-40 gap-10 mx-9 justify-between">
                    <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                    <li className='cursor-pointer hover:font-bold transition-all'>Your tasks</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
