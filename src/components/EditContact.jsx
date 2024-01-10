import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import '../styles/Edited.css'
import { ContactContext } from '../context/ContactContext'
import contactShema from '../form/Schema'

function EditContact({ edited }) {
  //const [editedValues, setEditedValues] = useState({edited})

  const { navigate, editedContact, setContactList, contactList } =
    useContext(ContactContext)
  //console.log(edited)
  const { values, handleChange, handleSubmit, validationSchema, handleBlur, errors, touched } = useFormik({
    initialValues: {
      firstname: edited.firstname,
      lastname: edited.lastname,
      company: edited.company,
      phone_number: edited.phone_number,
      address: edited.address,
      group: edited.group,
      id: edited.id,
    },
    onSubmit: (values, bag) => {
      const newEdit = { ...values }
      console.log(newEdit)
      const editedList = contactList.map((contact) =>
        newEdit !== '' && contact.id === newEdit.id ? { ...newEdit } : contact
      )
      localStorage.setItem('CONTACT', JSON.stringify(editedList))
      setContactList({ ...editedList })
      bag.setSubmitting(false)
      window.location.href = '/'
    },
    validationSchema: contactShema
  })
  return (
    <form className="row edited" onSubmit={handleSubmit}>
      <div className="col-12 mb-3">
        <div
          className="rounded-circle bg-light w-10 col-3 m-auto"
          style={{ height: '7.6rem' }}
        >
          <img src="" alt="" />
        </div>
      </div>
      <div className="col-12">
        <h1>
          <input
            placeholder="Ad"
            value={values.firstname}
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && touched.firstname && (
            <div className="error">{errors.firstname}</div>
          )}
          <input
            placeholder="Soyad"
            value={values.lastname}
            name="lastname"
            onChange={handleChange}
          />
        </h1>
        <small className="mb-1">
          <select name="group" value={values.group} onChange={handleChange}>
            <option value="Genel">Bir grup belirleyin</option>
            <option value="Aile">Aile</option>
            <option value="Arkadaşlar">Arkadaşlar</option>
            <option value="İş Arkadaşları">İş Arkadaşları</option>
            <option value="Genel">Genel</option>
          </select>
        </small>
      </div>
      <hr />
      <div className="col-12 px-3 m-auto">
        <div className="my-2">
          <span className="h6">Şirket : </span>
          <input
            name="company"
            placeholder="Şirket"
            value={editedContact}
            onChange={handleChange}
          />
        </div>
        <div className="my-2">
          <span className="h6"> Telefon : </span>
          <input
            type="tel"
            name="phone_number"
            placeholder="Telefon"
            value={values.phone_number}
            onChange={handleChange}
          />
          {errors.phone_number && touched.phone_number && (
            <div className="error">{errors.phone_number}</div>
          )}
        </div>
        <div className="my-2">
          <span className="h6"> Adres : </span>{' '}
          <textarea
            name="address"
            placeholder="Adres"
            value={values.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="col-12 d-flex px-5"
        style={{ justifyContent: 'space-between' }}
      >
        <button type="submit" className="btns">
          Kaydet
        </button>
        <button className="btns" onClick={() => navigate(-1)}>
          İptal
        </button>
      </div>
    </form>
  )
}

export default EditContact
