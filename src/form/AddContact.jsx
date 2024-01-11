import React, { useContext, useEffect } from 'react'
import { ContactContext } from '../context/ContactContext'
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import contactSchema from './Schema'

function AddContact() {
  const { contactList, setContactList, navigate, inputRef } =
    useContext(ContactContext)

  //formik yapısı ile kullanıcıdan bilgileri alma
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    validationSchema,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      company: '',
      phone_number: '',
      address: '',
      group: 'Bir grup belirleyin.',
    },
    onSubmit: (values, bag) => {
      //yeni kişi ekleme
      const newContact = { ...values, id: uuidv4() }
      setContactList([...contactList, newContact])
      bag.setSubmitting(false)
      bag.resetForm()
      window.location.href = '/'
    },
    validationSchema: contactSchema,
  })

  //storegaya veri ekleme işlemi
  useEffect(() => {
    inputRef.current.focus()
    localStorage.setItem('CONTACT', JSON.stringify(contactList))
  }, [contactList])

  return (
    <div className="container">
      <form
        className="row form justify-content-center rounded"
        onSubmit={handleSubmit}
      >
        <header className="title text-center">Yeni Kişi</header>
        <input
          name="firstname"
          placeholder="Ad"
          value={values.firstname}
          disabled={isSubmitting}
          onChange={handleChange}
          className="col-8 rounded"
          onBlur={handleBlur}
          ref={inputRef}
        />
        {errors.firstname && touched.firstname && (
          <div className="error">{errors.firstname}</div>
        )}
        <input
          name="lastname"
          placeholder="Soyad"
          value={values.lastname}
          disabled={isSubmitting}
          onChange={handleChange}
          className="col-8 rounded"
        />
        <input
          type="tel"
          placeholder="Telefon"
          name="phone_number"
          value={values.phone_number}
          disabled={isSubmitting}
          onChange={handleChange}
          className="col-8 rounded"
          onBlur={handleBlur}
        />
        {errors.phone_number && touched.phone_number && (
          <div className="error">{errors.phone_number}</div>
        )}
        <input
          name="company"
          placeholder="Şirket"
          value={values.company}
          disabled={isSubmitting}
          onChange={handleChange}
          className="col-8 rounded"
        />
        <textarea
          name="address"
          cols="15"
          rows="1"
          placeholder="Adres"
          value={values.address}
          onChange={handleChange}
          className="col-8 rounded"
        ></textarea>

        <select
          name="group"
          value={values.group}
          onChange={handleChange}
          disabled={isSubmitting}
          className="col-8 rounded"
        >
          <option value="">Bir grup belirleyin</option>
          <option value="Aile">Aile</option>
          <option value="Arkadaşlar">Arkadaşlar</option>
          <option value="İş Arkadaşları">İş Arkadaşları</option>
          <option value="Genel">Genel</option>
        </select>

        <div className="row mt-4" style={{ justifyContent: 'space-evenly' }}>
          <button
            type="submit"
            disabled={
              !isSubmitting
                ? !values.firstname || !values.phone_number
                : isSubmitting
            }
            className="col-5 btns"
          >
            Kaydet
          </button>
          <button
            type="cancel"
            className="cancel-btn col-5 btns"
            onClick={() => navigate('/')}
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddContact
