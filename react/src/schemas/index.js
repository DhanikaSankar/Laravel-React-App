import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email:yup.string().email('Please enter valid email').required('Email Field is Required.'),
    password:yup.string().min(6).required('Password Field is Required.'),
})

export const registerSchema = yup.object().shape({
    name:yup.string().min(3).required('Required'),
    age:yup.number().positive().required('Required'),
    email:yup.string().email('Please enter valid email').required('Email Field is Required.'),
    password:yup.string().min(6).required('Password Field is Required.'),
})

export default loginSchema;
