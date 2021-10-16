import React from 'react';
import './App.css';
import {sum} from './01/01'

export function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const users = [
        {id: 1, name: 'Dimych'},
        {id: 121, name: 'Sveta'},
        {id: 121223, name: 'Katya'},
        {id: 2323, name: 'Viktor'},
        {id: 99, name: 'Ignat'}]

    const liElements = users.map((n, i) =>
        <li key={n.id}>{n.name}</li>)

    return (
        <div className='App'>
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
