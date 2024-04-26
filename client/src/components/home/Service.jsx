import React from 'react'
import css from "./Home.module.css"
import { MdOutlineRestaurant } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";

const Service = () => {
  return (
	<section className={css.service}>
		<div className={css.block}>
			<div className={css.box}>
				<MdOutlineRestaurant className={css.i}/>
				<h2>Kvalitní potraviny</h2>
				<p>Naše služba má nejlepší kvalitu potravin</p>
			</div>
			<div className={css.box}>
				<FaCartPlus  className={css.i}/>
				<h2>Online objednávka</h2>
				<p>Objednávky přijímáme pouze online</p>
			</div>
			<div className={css.box}>
				<RiCustomerServiceLine className={css.i}/>
				<h2>Služba 12/7</h2>
				<p>Pracujeme pouze 12 hodin v 7 dnech</p>
			</div>
		</div>
	</section>
  )
}

export default Service