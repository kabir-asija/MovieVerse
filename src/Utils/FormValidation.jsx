import * as Yup from "yup";

export const FormValidation = Yup.object({
  fullname: Yup.string()
    .min(5, "Full Name must be at least 5 characters")
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/,"Full Name must contain first and last name")
    .required("Full Name is required"),
  email: Yup.string().email("Enter Valid Email").required("Enter Email"),
  address: Yup.string(5).required("Address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string(5).required("State is required"),
  city: Yup.string(5).required("City is required"),
  zipcode: Yup.string()
    .matches(/^\d{5,6}$/, "Invalid zipcode!")
    .required("Zipcode is required"),
});
