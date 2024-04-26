import React from 'react'
import css from "./Home.module.css"
import Service from './Service'
import Menu from './Menu'

const Home = () => {
	return (
		<div className={css.home}>
			<section className={css.hero}>
                <div className={css.hero_about}>
                    <h2 className={css.h2}>LAHODNÝ SHASHLIK</h2>
                    <p className={css.p}>NA OBJEDNÁVKU VÁM ZAŘÍDÍME JÍDLO PRO OSLAVY, SVATBY, ATD. TAKÉ MŮŽEME GRILOVAT NA. <br />MINIMÁLNÍ CENA OBJEDNÁVKY 500KČ.</p>
                    <a className={css.btn} href='#menu'>Viz menu</a>
                </div>
                <div className={css.animation}>
                    <img src="/images/hero.png" alt="" /> 
                </div>
            </section>
            <Service/>
            <Menu/>
		</div>
	)
}

export default Home
