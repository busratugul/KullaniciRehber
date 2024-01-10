import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  //STATES
  const [contactList, setContactList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [group, setGroup] = useState('')
  const [edit, setEdit] = useState(false)
  //console.log(contactList)
  //console.log(edit)

  //pathler arası yönlendirme
  const navigate = useNavigate()

  //Search inputu ile filtreleme
  const filtered = contactList.filter((contact) => {
    return (
      Object.keys(contact).some((key) =>
        contact[key].toString().toLowerCase().includes(filter.toLowerCase())
      ) && (group === '' ? contact.group !== group : contact.group === group)
    )
  })

  //Listeden contact silme
  const handleDelete = (id) => {
    const filterList = contactList.filter((contact) => contact.id !== id)
    localStorage.setItem('CONTACT', JSON.stringify(filterList))
    //console.log(filterList)
    setContactList([...filterList])
  }

  //Yapılan değişikliği kaydetme
/*   const saveEdit = (id) => {
    const editedContact = contactList.map((contact) =>
      contact.id !== id ? editedContact : contact
    )
    setContactList([...contactList, { ...editedContact }])
    localStorage.setItem(
      'CONTACT',
      JSON.stringify([...contactList, { ...editedContact }])
    )
    setEdit(false)
  } */

  //CONTEXT API PROPSLARI
  const initialStates = {
    contactList,
    setContactList,
    isOpen,
    setIsOpen,
    filter,
    setFilter,
    filtered,
    group,
    setGroup,
    navigate,
    handleDelete,
    edit,
    setEdit
  }
  return (
    <ContactContext.Provider value={initialStates}>
      {children}
    </ContactContext.Provider>
  )
}
