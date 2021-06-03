import * as Yup from "yup";
import { MIN_PASSWORD_LENGTH } from "./Pass"
import { MAX_PASSWORD_LENGTH } from './Pass';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Name must be at least 3 Charcters")
    .required("Please enter your username"),
  email: Yup.string()
    .email("Email is Invalid")
    .required("Please enter your email"),
  password: Yup.string()
    .min(MIN_PASSWORD_LENGTH, `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`)
    .max(MAX_PASSWORD_LENGTH, "Password is too long!")
    .required("Please enter your password"),
  confirmed: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Password Confirmation is Required"),
});

export default RegisterSchema;