'use client'
import styles from "@/app/styles/navbar.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {

    const [openMenu,setOpenMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className={openMenu ? `active` : "" }>
                    <ul className="navbarList">
                        <li className="navbarItem">
                            <Link className="navbarLink" href="/">Home</Link>
                        </li>
                        <li className="navbarItem">
                            <Link className="navbarLink" href="/about"
                                  onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li>
                        <li className="navbarItem">
                            <Link className="navbarLink"
                                  onClick={() => setOpenMenu(false)}
                                  href="/movie">Movie</Link>
                        </li>
                        <li className="navbarItem">
                            <Link className="navbarLink"
                                  onClick={() => setOpenMenu(false)}
                                  href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    <div className='mobile-navbar-btn'>
                        <CgMenu
                            name="menu-outline"
                            className='mobile-nav-icon'
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className='mobile-nav-icon close-outline'
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Nav;