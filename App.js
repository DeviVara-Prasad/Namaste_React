import React from "react";
import ReactDOM from "react-dom/client";
import {BsSearch} from "react-icons/bs"
import {GrReactjs} from "react-icons/gr"
import {FaUserCircle} from "react-icons/fa";
const Logo = ()=>{
    return (
        <div id="LogoContainer">
                    <div className="icon">
                    <GrReactjs size="32"/>
                    </div>
        </div>
    )
}
const SearchBar = () =>{
    return (
        <div id="SearchBar">
                    <input id="searchText" type="text" title="searchBar" placeholder="Search"/>
                    <button id="searchLogo" type="submit">
                        <div className="icon">
                            <BsSearch size="16"/>
                        </div>
                    </button>
        </div>
    )
}
const UserProfile = () =>{
    return (
        <div id="userLogo">
                    <div className="icon">
                        <FaUserCircle size="32"/>
                    </div>
        </div>
    )
}
const HeaderComponent = ()=>{
    return (
        <header id="Header">
            <nav id="headerNav">
                <Logo/>
                <SearchBar/>
                <UserProfile/>
            </nav>
        </header>
    )
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeaderComponent/>);