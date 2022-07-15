import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-content">
      <h1>Gifs</h1>
      <Link to='/gif/Messi'>Messi</Link>
      <Link to='/gif/CR7'>CR7</Link>
      <Link to='/gif/Neymar'>Neymar</Link>
        <Route component={ListOfGifs} path='/gif/:keyword' />
      </section>
    </div>
  );
}

export default App;
