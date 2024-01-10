import * as yup from 'yup'

const contactSchema = yup.object({
    firstname:yup.string().required('İsim girmek zorunludur!'),
    phone_number: yup.number().positive("Lütfen geçerli bir numara giriniz!").required('Telefon numarası girmek zorunludur!').min(8, "Lütfen geçerli bir telefon numarası giriniz!").integer("Telefon numarası sadece sayılardan oluşmalıdır").typeError("Telefon numarası sayılardan oluşmalıdır!"),
})  


export default contactSchema