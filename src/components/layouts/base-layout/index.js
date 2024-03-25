import React from 'react'
import Navigation from '../../navigation'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../scrollToTop'

function BaseLayout() {
    const currentYear = new Date(Date.now()).getFullYear()

    return (
        <>
            <ScrollToTop />
            <main>
                <header>
                    <Navigation/>
                </header>
                <Outlet/>
                <footer className='my-12'>
                    <h3 className='text-center text-base-black text-sm md:text-lg'>
                        © Unyte Africa {currentYear}
                    </h3>
                </footer>
            </main>
        </>
        
    )
}

export default BaseLayout