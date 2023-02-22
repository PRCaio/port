import React from "react"
import styles from "../../styles/Home.module.css"

const Header = () => {
    return (
        <header>
            <div className={styles.header}>

                <picture className={styles.perfil}>
                    <source className={styles.perfil} media="(max-width: 868px )" srcSet="/perfil4.png" type="image/png" width={700} alt="perfil" />

                    <img className={styles.perfil} src="/perfil3.png" alt="perfil"></img>

                </picture>




                <div className={styles.header2}>
                    <p className={styles.text}><strong>Rubens Caio</strong> </p>
                    <h2 className={styles.title2}>Mestre em Matemática e Desenvolvedor Full Stack</h2>
                    <p className={styles.text}>Nos últimos 2 anos estudei e trabalhei com desenvolvimento Mobile e Web, onde desenvolvi aplicações em React Native, Api{`'`}s em Node.js e páginas Web utilizando Next.js e a plataforma Vercel. Equipe campeã do prêmio Case Secreto do BTG Open Finance.</p>
                    <div className={styles.divButton}>
                        <a href="/Rubens_Caio.pdf" download="Rubens_Caio.pdf"><div className={styles.buttonD}>Download CV</div></a>
                        <a href="#contact"><div className={styles.buttonE}>Vamos conversar</div></a>
                    </div>
                </div>

                <a href="#about"><img src="/scroll.gif" className={styles.scroll} size="15rem" alt="perfil"></img></a>
            </div>
        </header>
    )
}

export default Header;
