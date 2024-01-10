import React, { useContext, useEffect } from 'react'
import { ContactContext } from '../context/ContactContext'
import { MdDelete } from 'react-icons/md'
import { FaUserCog } from 'react-icons/fa'

function ContactList() {
  const { filtered, filter, setFilter, navigate, handleDelete, params } =
    useContext(ContactContext)

  return (
    <div className="container text-center m-auto">
      <section className="row">
        <div className="col-12">
          <input
            className="search-input mx-auto py-1 px-3 mb-3 rounded"
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="&#x1F50E; Bir kullanıcı arayın..."
          />
        </div>

        {/* filtrelenmiş listeyi mapleme işlemi */}
        {filtered.map((one) => (
          <div
            key={one.id}
            onDoubleClick={() => navigate(`${one.id}`)}
            className="col-12 rounded shadow my-2 contact"
          >
            <div className="row py-2 align-items-center">
              <div
                className="rounded-circle bg-light col-1 m-auto"
                style={{ height: '3rem', width: '3rem' }}
              >
                <img src="" alt="" />
              </div>

              <div
                className="col-6 d-flex align-items-center"
                style={{ justifyContent: 'space-between' }}
              >
                <div className="col-6 text-end d-flex">
                  <p className="ms-2">
                    {one.firstname} {one.lastname}
                  </p>
                </div>
                <div className="col-6 text-end">
                  <p>{one.phone_number}</p>
                </div>
              </div>
              <div className="col-4 m-auto text-end">
                <button
                  className="btns fs-4 col-sm-2"
                  onClick={() => handleDelete(one.id)}
                >
                  <MdDelete />
                </button>
                <button
                  className="btns fs-4 col-sm-2 ms-4"
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
