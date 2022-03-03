import './App.css';

import { Routes, Route } from "react-router-dom";

import { useState } from 'react';

import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import Pokedex from './components/Pokedex';

import Header from './components/Header';
import LoadingPokeball from './components/Loading';

import Post from './components/Post';
import CreatePost from './components/CreatePost';


export default function App() {
  const [loading, setLoading] = useState(false); /* toggle between false and true to view what you need. Will impliment loading spinner as stretch */

  return (
    <>
      <Header />
      <main>
      {!loading ? (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home setLoading={setLoading}/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ratings" element={<Pokedex />} />
        <Route path="/profile" element={<Pokedex />} /> /* This needs to have the proper component */
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>

      ) : <LoadingPokeball/>}
      </main>
    </>
  );
}

