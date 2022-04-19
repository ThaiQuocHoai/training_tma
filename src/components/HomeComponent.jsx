import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomeComponent() {
    return (
        <div>
            <h1>Home Component</h1>
            <ul>
                <li><NavLink to="/task">Go to TodoList</NavLink></li>
                <li><NavLink to="/calculate">Go to Basic Calculator</NavLink></li>
                <li><NavLink to="/product">Go to Product Cart</NavLink></li>
                <li><NavLink to="/enhance">Go to EnhanceTasks</NavLink></li>
                <li><NavLink to="/reacthookform">Go to React hook form</NavLink></li>
                <li><NavLink to="/game">Go to Game</NavLink></li>
                <li><NavLink to="/mailbox">Go to Mailbox App</NavLink></li>
            </ul>
        </div>
    )
}
