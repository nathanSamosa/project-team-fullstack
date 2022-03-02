import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import Pokedex from './components/Pokedex';
import Post from './components/Post'

export default function App() {
  return (
    <div className="App">
      {/* <Login />
      <Registration /> 
      <Home />
      <Pokedex />*/}
      <Post />
    </div>
  );
}
