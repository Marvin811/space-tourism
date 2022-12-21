import React from "react";
import {Route, Routes} from 'react-router-dom';
import '../../style/App.css';
import {Header} from "../Header/Header";
import {Home} from "../Home/Home";
import {Destination} from "../Destination/Destination";
import {Crew} from "../Crew/Crew";
import {Technology} from "../Technology/Technology";


export default function App() {
    return (
        <div className="page">
            <Header />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route path="/destination" element={<Destination/>}></Route>
                <Route path="/crew" element={<Crew/>}></Route>
                <Route path="/technology" element={<Technology/>}></Route>
            </Routes>
        </div>
    );
}
