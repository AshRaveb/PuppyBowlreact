/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'

export default function App() {
  const cohortName = '2302-ACC-PT-WEB-PT-A';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/players" element={<AllPlayers APIURL={APIURL} />} />
        <Route path="/players/:id" element={<SinglePlayer APIURL={APIURL} />} />
      </Routes>
    </>
  )
}