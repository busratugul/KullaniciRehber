import React, { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

function Footer() {
  const { filtered } = useContext(ContactContext)
  return <footer className="container footer align-self-end">{filtered.length} Kişi Mevcut <br />
  <small>created by Busra Tugul © 2024 </small></footer>
}

export default Footer
