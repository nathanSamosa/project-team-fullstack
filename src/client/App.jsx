import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import Pokedex from './components/Pokedex';
import Post from './components/Post'
import CreatePost from './components/CreatePost'

export default function App() {
  return (
    <div className="App">
      {/* <Login />
      <Registration /> 
      <Home />*/}
      <CreatePost />
    </div>
  );
}
