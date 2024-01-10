import React, { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

export const FilterMenu = () => {
  const { setGroup } = useContext(ContactContext)

  //Filtreleme işlemi için state güncellemesi
  return (
    <div className="dropdown">
      <ul>
        <li onClick={() => setGroup('Aile')}>Aile</li>
        <li onClick={() => setGroup('Arkadaşlar')}>Arkadaşlar</li>
        <li onClick={() => setGroup('İş Arkadaşları')}>İş Arkadaşları</li>
        <li onClick={() => setGroup('')}>Genel</li>
      </ul>
    </div>
  )
}
