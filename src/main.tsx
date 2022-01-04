import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <li onClick={() => navigate("./renderProps")}>Render Props Example</li>
            <li onClick={() => navigate("./listing")}>Listing Reconcilation Example</li>
            <li onClick={() => navigate("./lebelExp")}>Label Reconcilation Example</li>
        </div>
    );
}

export default Main;
