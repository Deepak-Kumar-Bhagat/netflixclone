import React from 'react';
import styles from "@/app/styles/navbar.css"
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

function Header(){
    return(
        <>
        <headder className="main_header"> 
            <div className="navbar_brand">
                <Link href="/">
                  <Image src="/logo.png" alt="My Logo" width={150} height={40}/>
                </Link>
            </div>
            <Nav/>
        </headder>
        </>
    )
}

export default Header;