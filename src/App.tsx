import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my-works/MyWorks";
import {DistantWork} from "./distantwork/DistantWork";
import {Contact, } from "./contacts/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className={"App"}>

<Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <DistantWork/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
