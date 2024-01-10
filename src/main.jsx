import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContactProvider } from './context/ContactContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactProvider>
      <App />
    </ContactProvider>
  </BrowserRouter>
)
