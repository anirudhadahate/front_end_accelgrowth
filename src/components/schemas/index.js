import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name "),
  firstName: Yup.string().min(2).required("Please enter your name "),
  lastName: Yup.string().min(2).required("Please enter your Last name "),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please fill the password"),
  number: Yup.string().min(10).required("Please fill the contact-number"),
});
