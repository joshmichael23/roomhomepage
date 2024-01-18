import React from 'react'


function Header(props) {
    function scroll() {
        props.openMobile == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    }
    return (
        <header>
            <button title="MobileMenu" className={`mobilemenu mobile ${props.openMobile ? 'active' : ''}`} onClick={() => { props.setOpenMobile(!props.openMobile), scroll(); }}></button>
            <img src="/logo.svg" alt="" />
            <nav className={`mobilemenu-nav ${props.openMobile ? 'active mobile' : ''}`}>
                <div></div>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
            <nav className='desktopmenu-nav desktop'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}

export default Header