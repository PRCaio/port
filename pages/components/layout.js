import Link from 'next/link'
import { useState } from "react";
import styles from "../../styles/Layout.module.css";
import styles2 from '../../styles/Home.module.css'
import Image from 'next/dist/client/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { RiServiceLine, RiContactsBook2Line } from 'react-icons/ri'
import { BsFacebook, BsLinkedin, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return <>
        <header className={styles2.header}>
            <nav className={styles.navbar}>
                <nav className={styles.nav} >
                    <a href="#" ><abbr title="Início" ><AiOutlineHome size={23}/></abbr></a>
                    <a href="#about">
                    <abbr title="Sobre" ><AiOutlineUser size={23}/></abbr></a>
                    <a href="#experience"><abbr title="Experiência" ><BiBookBookmark size={23}/></abbr></a>
                    <a href="#services"><abbr title="Serviços" ><RiServiceLine size={23}/></abbr></a>
                    <a href="#contact"><abbr title="Contato" ><RiContactsBook2Line size={23}/></abbr></a>
                </nav>
                {/* <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/about'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact</a>
                        </Link>
                    </li>
                </ul> */}
                {/* <a onClick={openMenu}>{isOpen === false ? <AiOutlineMenu color='white' size={35} /> : <AiOutlineClose color='white' size={35} />}</a> */}

            </nav>
        </header>
        
            <nav className={styles.contact2}>
                <nav className={styles.contact} >
                    <a href="https://www.linkedin.com/in/rubens-caio-3a0845111/" target="_blank" rel="external"><BsLinkedin size={23}/></a>
                    <a href="#https://www.facebook.com/rubens.caio/" target="_blank" rel="external"><AiOutlineMail size={23}/></a>
                    <a href="https://api.whatsapp.com/send?phone=5521976941694" target="_blank" rel="external"><BsWhatsapp size={23} /></a>
                    <a href="https://github.com/PRCaio" target="_blank" rel="external"><AiFillGithub size={23}/></a>
                    
                </nav>
            </nav>
        
        {children}
        {/* {footer} */}
        <div className={styles2.container2}>

            <footer className={styles.footer}>

                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    </>
}