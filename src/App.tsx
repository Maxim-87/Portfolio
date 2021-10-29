import React from 'react';
import {Header} from './Header/Header';
import {Main} from './Header/Main/Main';
import {Skills} from "./Skills/skills";
import {Projects} from "./Projects/Projects";
import { Work } from './Work/Work';
import {Contacts} from "./Contacts/Contacts";
import { Footer } from './Footer/Footer';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Work/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
