import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
    <nav className = {styles.Navbar} >
        <a href ="/">
      <Logo />
      </a>
      <SearchBar placeholder="Search a song of your choice" />
      <Button className ={styles.Button} >Give Feedback</Button>
    </nav>
    </>
  )
}

export default Navbar;
