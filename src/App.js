import logo from './logo.svg';
import './App.css';
import { gifs, texts } from './data';
import { useState } from 'react';
import EntryPage from './Components/EntryPage';
import MainPage from './Components/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CreatePage from './Components/CreatePage';

function App() {





  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/create" element={<CreatePage />}></Route>
          <Route exact path='/:id' element={<MainPage />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
