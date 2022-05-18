import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const Views = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={ Home() }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Views;