import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Style/index.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../components/schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
        // action.resetForm();
      },
    });
  console.log(errors);

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample img"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <div className="input-block">
              <MDBInput
                // wrapperClass="mb-4"
                label="Name *"
                placeholder="Name"
                id="formControlLg"
                type="text"
                size="lg"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form_error">{errors.name}</p>
              ) : null}
            </div>

            <div className="input-block">
              <MDBInput
                style={{ "margin-top": "1.8rem" }}
                label="Email *"
                wrapperClass="mb-4"
                placeholder="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form_error">{errors.email}</p>
              ) : null}
            </div>

            <div className="input-block">
              <MDBInput
                label="Password *"
                wrapperClass="mb-4"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form_error">{errors.password}</p>
              ) : null}
            </div>

            <div
              className="d-flex justify-content-between mb-4"
              style={{ "margin-left": "2.5rem" }}
            >
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a style={{ "margin-right": "4rem" }} href="!#">
                Forgot password?
              </a>
            </div>

            <div
              className="text-center text-md-start mt-4 pt-2"
              style={{ "margin-left": "14rem" }}
            >
              <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?
                <a href="#!" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div> */}
    </MDBContainer>
  );
};

export default Login;
