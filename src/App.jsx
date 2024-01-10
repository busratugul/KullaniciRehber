import React from 'react'
import AddContact from './form/AddContact'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import DetailContact from './components/DetailContact'

function App() {
  return (
    <div className="App shadow rounded">
      <Routes>
        <Route index element={<Home />} />
        <Route path="add" element={<AddContact />} />
        <Route path=":id" element={<DetailContact />} />
      </Routes>
    </div>
  )
}

export default App
