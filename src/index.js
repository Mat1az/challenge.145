import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Clock.css';
import Clock from "./Clock";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="App">
            <Clock/>
        </div>
    </React.StrictMode>
);
