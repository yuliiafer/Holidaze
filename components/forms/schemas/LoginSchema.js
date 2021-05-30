import * as Yup from "yup";
import { MIN_PASSWORD_LENGTH } from "./Pass";
import { MAX_PASSWORD_LENGTH } from "./Pass";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string()
    .email("Email is Invalid")
    .required("Please enter your email"),

  password: Yup.string()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
    )
    .max(MAX_PASSWORD_LENGTH, "Password is too long!")
    .required("Please enter your password"),
});

export default LoginSchema;