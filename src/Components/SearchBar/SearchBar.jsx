import React from "react";
import styles from "./SearchBar.module.css"
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";

function SearchBar({placeholder}) {
    const onSubmit = (e) => {
        e.preventDefault(); 
        //write submission logic here
    }
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.SearchBar} pplaceholder = {placeholder} required />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
export default SearchBar;