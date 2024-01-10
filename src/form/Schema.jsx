import {object, string, number} from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactSchema = object({
    firstname: string().required(),
    lastname: string(),
    phone_number: number().required().positive().integer().min(8).typeError(),
    company: string(),
    group: string()
})

