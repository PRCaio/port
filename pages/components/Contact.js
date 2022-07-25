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

export default function Contact() {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return <>
              
           
                <div className={styles.contact3}>
                    <p><a href="https://www.linkedin.com/in/rubens-caio-3a0845111/" rel="external"><BsLinkedin size={20}/> Entre em contato pelo Linkedin</a></p>

                    <p><a href="mailto:rubens.caio.93@gmail.com"  rel="external"><AiOutlineMail size={20}/> rubens.caio.93@gmail.com</a></p>

                    <p><a href="https://api.whatsapp.com/send?phone=5521976941694"  rel="external"><BsWhatsapp size={20} /> +55 (21) 97694-1694</a></p>

                    <p><a href="https://github.com/PRCaio" rel="external"><AiFillGithub size={20}/> Conheça alguns dos meus códigos</a></p>
                </div>    
                
            
        
        
        
    </>
}