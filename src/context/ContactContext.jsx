import React, { createContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  //STATES
  const [contactList, setContactList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [group, setGroup] = useState('')
  const [edit, setEdit] = useState(false)
  //console.log(contactList)

  //pathler arası yönlendirme
  const navigate = useNavigate()

  //id alma
  const params = useParams()

  //Search inputu ile filtreleme
  const filtered = contactList.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(filter.toLowerCase())
    ) && ( group === '' ? contact.group !== group : contact.group === group)
  })

  const handleDelete = (id) => {
    const filterList = contactList.filter((contact) => contact.id !== id)
    localStorage.setItem("CONTACT",JSON.stringify(filterList))
    //console.log(filterList)
    setContactList([...filterList])
  }

  const saveEdit = () => {
    const editList = contactList.filter((contact) => contact.id !== id)
    localStorage.setItem("CONTACT",JSON.stringify(editList))
    setContactList([...editList])
  }

  useEffect(() => {
    console.log('context render')
  }, [])

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
    setEdit,
    params
  }
  return (
    <ContactContext.Provider value={initialStates}>
      {children}
    </ContactContext.Provider>
  )
}
