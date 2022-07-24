import React, {useState} from "react"
import styles from '../../styles/Home.module.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { RiServiceLine, RiContactsBook2Line } from 'react-icons/ri'


const NaviBar = () => {
    const [activeNav, setActiveNav] = useState('#')
    

    return(
        <>        
        <nav className={styles.nav} >
            <a className={ styles.navactive} href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBookBookmark/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><RiContactsBook2Line/></a>
        </nav>         
       
        </>
    )
}

export default NaviBar;
