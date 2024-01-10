import React, { useContext, useEffect } from 'react'
import { ContactContext } from '../context/ContactContext'
import { MdDelete } from 'react-icons/md'
import { FaUserCog } from 'react-icons/fa'

function ContactList() {
  const {
    filtered,
    filter,
    setFilter,
    navigate,
    handleDelete,
    inputRef,
    generateRandomImg,
  } = useContext(ContactContext)

  useEffect(() => inputRef.current.focus(), [])

  return (
    <div className="container text-center m-auto">
      {/* search input*/}
      <section className="row">
        <div className="col-12">
          <input
            className="search-input my-3 py-1 px-3 rounded"
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="&#x1F50E; Bir kullanıcı arayın..."
            ref={inputRef}
          />
        </div>

        {/* filtrelenmiş listeyi mapleme işlemi */}
        {filtered.map((one) => (
          <div
            key={one.id}
            onDoubleClick={() => navigate(`${one.id}`)}
            className="col-11 m-auto my-2 rounded shadow contact"
          >
            <div className="row py-2 align-items-center">
              <div
                className=" col-1 m-auto text-center"
                style={{ height: '3rem', width: '3rem' }}
              >
                {/* profil fotosu ayarlama */}
                <img
                  src={`
        https://api.dicebear.com/7.x/thumbs/svg?seed=${generateRandomImg()}`}
                  alt="profil"
                  className="rounded-circle"
                  style={{ height: '3rem', width: '3rem' }}
                />
              </div>

              <div
                className="col-7 d-flex align-items-center"
                style={{ justifyContent: 'space-between' }}
              >
                <div className="col-6 text-start d-flex">
                  <p className="ms-2 pt-2">
                    {one.firstname} {one.lastname}
                  </p>
                </div>
                <div className="col-6 text-end">
                  <p className="pt-2">{one.phone_number}</p>
                </div>
              </div>
              {/* sil butonu */}
              <div className="col-3 m-auto text-end">
                <button
                  className="btns fs-4 col-4 pe-4 me-1"
                  onClick={() => handleDelete(one.id)}
                >
                  <MdDelete />
                </button>
                {/* Detay butonu */}
                <button
                  className="btns fs-4 col-4"
                  onClick={() => navigate(`${one.id}`)}
                >
                  <FaUserCog />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ContactList
