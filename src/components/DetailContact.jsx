import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { FaUserEdit } from 'react-icons/fa'
import { ContactContext } from '../context/ContactContext'

function DetailContact() {
  const { navigate, contactList } = useContext(ContactContext)

  //linkten aldığımız id bilgisi ile kullanıcı bilgilerini alma
  const { id } = useParams()
  const contact  = contactList.find((contact) =>contact.id === id )
  //verileri objeye kopyalama 
  const copy = {...contact} 
  

  return (
    <div className="detail container text-center fs-6 rounded">
      <section className="row">
        <div className="col-12 mb-3">
          <div
            className="rounded-circle bg-light w-10 col-3 m-auto"
            style={{ height: '7.6rem' }}
          >
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-12">
          <h1>{copy.firstname} {copy.lastname}</h1>
          <small>{copy.group !== "boş" ?copy.group : "-"}</small>
        </div>
        <hr />
        <div className="col-12 px-3 m-auto">
          <div className="my-2">
            <span className="h6">Şirket : </span> {copy.company ?copy.company : " - " }
          </div>
          <div className="my-2">
            <span className="h6"> Telefon : </span> {copy.phone_number}
          </div>
          <div className="my-2">
            <span className="h6"> Adres : </span> {copy.address ?copy.address : " - " }
          </div>
        </div>
        <div
          className="col-12 d-flex"
          style={{ justifyContent: 'space-between' }}
        >
          <button className="btns fs-4 col-6 m-auto">
            <FaUserEdit />
          </button>
          <button
            className="btns fs-4 col-6 m-auto"
            onClick={() => navigate('/')}
          >
            <TiArrowBack />
          </button>
        </div>
      </section>
    </div>
  )
}

export default DetailContact
