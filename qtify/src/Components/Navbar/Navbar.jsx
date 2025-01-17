import React from "react"
import Logo from "../Logo/Logo"
import Search from "../Search/Search";
import styles from "./Navbar.module.css"
import Button from "../Button/Button";
// import { Link } from "react-router-dom";

function Navbar({searchData}){

    return (
        <nav className={styles.navbar}>
        <a href="/">
            <Logo />
        </a>
        <Search 
            placeholder={"Search a album of your choice" }
            searchData= {searchData}
        />
        <Button>Give Feedback</Button>
        </nav>

    )
}

export default Navbar;