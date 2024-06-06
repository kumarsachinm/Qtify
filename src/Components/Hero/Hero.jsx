import React from "react";
import  hero from "../../assets/hero.png"
import styles from "./Hero.module.css";

export default function Hero(){
    return <img className = {styles.Hero} src= {hero} alt="hero" />
}
