import React from "react";
import {Route, Routes} from 'react-router-dom';
import '../style/App.css';
import {Main} from "./Main";


function App() {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<Main/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
