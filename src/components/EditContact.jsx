import React, { useContext, useEffect,useState } from 'react'
import { useFormik } from 'formik'
import { ContactContext } from '../context/ContactContext'
import contactShema from '../form/Schema'

function EditContact({ edited, icon }) {

  const { navigate, editedContact, setContactList, contactList, generateRandomImg } =
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
      /* düzenlenmiş kişiyi ekleme */
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
          className="rounded-circle bg-light col-3 m-auto img"
          style={{width:"6rem",height: "6rem"}}
        >
        <img src={icon} alt="" className='rounded-circle' style={{width:"6rem",height: "6rem"}} />
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
            className='me-3'
          />
          {errors.firstname && touched.firstname && (
            <small className="error">{errors.firstname}</small>
          )}
          <input
            placeholder="Soyad"
            value={values.lastname}
            name="lastname"
            onChange={handleChange}
          />
        </h1>
        <small>
          <select name="group" value={values.group} onChange={handleChange} >
            <option value="Genel">Bir grup belirleyin</option>
            <option value="Aile">Aile</option>
            <option value="Arkadaşlar">Arkadaşlar</option>
            <option value="İş Arkadaşları">İş Arkadaşları</option>
            <option value="Genel">Genel</option>
          </select>
        </small>
      </div>
      <hr  className="my-2"/>
      <div className="col-12 py-3 px-5">
        <div className=" text-center">
          <span className="h6 mt-2">Şirket : </span>
          <input
            name="company"
            placeholder="Şirket"
            value={editedContact}
            onChange={handleChange}
            className='ms-4'
            style={{width: "13rem"}}
          />
        </div>
        <div className="my-3">
          <span className="h6 me-3"> Telefon : </span>
          <input
            type="tel"
            name="phone_number"
            placeholder="Telefon"
            value={values.phone_number}
            onChange={handleChange}
            style={{width: "13rem"}}
          />
          {errors.phone_number && touched.phone_number && (
            <small className="error ms-5 ps-1">{errors.phone_number}</small>
          )}
        </div>
        <div className="my-3">
          <span className="h6 me-1"> Adres : </span>{' '}
          <textarea
            name="address"
            placeholder="Adres"
            value={values.address}
            onChange={handleChange}
            style={{width: "13rem"}}
            className='ms-3'
          />
        </div>
      </div>
      <hr />
      <div
        className="col-12 d-flex p-3"
        style={{ justifyContent: 'space-around' }}
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
