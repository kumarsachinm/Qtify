import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className = {styles.navbar} >
        <a href ="/">
      <Logo />
      </a>
      <SearchBar placeholder="Search an album of your choice" />
      <Button >Give Feedback</Button>
    </nav>
  )
}

export default Navbar;
