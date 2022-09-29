// import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import React from "react";
import logo from "./img/logo.png"
import heart from "./img/heart 1.png"
import phone from "./img/Phone.png"
import ktlg from "./img/light.png"
import search from "./img/search.png"
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";

function Navbar(){
    return(
        <>
        {/* <Router> */}
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <a href="#">Главная</a>
                    <a href="#">О компании</a>
                    <a href="#">Каталог</a>
                </div>
                <div className="contacts">
                    <img src={phone} alt="phone" />
                    <a href="tel: +7 (965) 084-29-29">+7 (965) 084-29-29</a>
                    <img src={heart} alt="heart" />
                    <button>Пусто</button>
                </div>
            </nav>
            <div className="katalog">
                <div className="kat_links">
                    <a href="#"><img src={ktlg} alt="ktlg" /></a>
                    {/* <NavLink to="/katalog" >Каталог</NavLink> */}
                    <a href="#">Стройматериалы</a>
                    <a href="#">Инструменты</a>
                    <a href="#">Электрика</a>
                    <a href="#">Интерьер и одежда</a>
                </div>
                <div className="kat_search">
                    <input type="search" placeholder="Поиск, например Круг зачистной" />
                    <img src={search} alt="search_logo" />
                    <a href="#">Москва</a>
                </div>
            </div>
        </div>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        {/* <Routes>
            <Route path="/katalog" element={}>
        </Routes> */}
        {/* </Router> */}
        </>
    )
}

export default Navbar;