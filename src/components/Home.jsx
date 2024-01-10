import React, { useContext, useEffect } from 'react'
import { ContactContext } from '../context/ContactContext'
import Footer from './Footer'
import ContactList from './ContactList'
import { FilterMenu } from './FilterMenu'
import { FaPlus, FaThList } from 'react-icons/fa'

function Home() {
  const { isOpen, setIsOpen, navigate, setContactList, contactList } =
    useContext(ContactContext)

  //storegadan veri çekme işlemi
  useEffect(() => {
    const storedList = localStorage.getItem('CONTACT')
    if (storedList) {
      setContactList(JSON.parse(storedList))
    }
  }, [])

  return (
    <div className="container home position-relative rounded shadow ">
      <div className="row">
        <div className="col-3" onClick={() => setIsOpen(!isOpen)}>
          <button className="icon-btn btns" disabled={contactList.length === 0}>
            <FaThList />
          </button>

          {isOpen && contactList.length !== 0 && (
            <>
              <div className="dropdown-icon rounded">
                <FilterMenu />
              </div>
              <div className="overlay"></div>
            </>
          )}
        </div>
        <div className="col-6 text-center mb-1">
          <header className="h3 title position-relative">
            Kullanıcı Rehberi
          </header>
        </div>
        <div className="col-3 text-end" onClick={() => navigate('add')}>
          <button className="icon-btn btns">
            <FaPlus />
          </button>
        </div>

        {contactList.length !== 0 ? (
          <ContactList />
        ) : (
          <div className="m-5 p-5" style={{ width: '60rem' }}></div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
