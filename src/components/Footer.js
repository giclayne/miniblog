import React from 'react'
import {NavLink} from "react-router-dom"
//css
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que tem interesse</h3>
      <p>Miniblog &copy; 2022</p>
    </footer>
  )
}

export default Footer