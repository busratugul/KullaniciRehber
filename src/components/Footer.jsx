import React, { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

function Footer() {
  const { filtered } = useContext(ContactContext)
  return (
    <footer className="container footer align-self-end ">
      {filtered.length} Kişi Mevcut <br />
    </footer>
  )
}

export default Footer
