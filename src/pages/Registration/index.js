import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import { signUpSchema } from "../../components/schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  inlineRadio: "",
  option: "",
  option2: "",
  number: "",
  password: "",
};
const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <MDBContainer fluid className="bg-secondary">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-4 registrtation">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  className="rounded-start"
                  fluid
                />
              </MDBCol>

              <MDBCol md="6">
                <form onSubmit={handleSubmit}>
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center ">
                    <h3
                      className="mb-5 text-uppercase fw-bold"
                      style={{ textAlign: "center" }}
                    >
                      registration form
                    </h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First Name *"
                          size="lg"
                          id="form1"
                          type="text"
                          name="firstName"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.firstName && touched.firstName ? (
                          <p className="form_error">{errors.firstName}</p>
                        ) : null}
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last Name *"
                          size="lg"
                          id="form2"
                          type="text"
                          name="lastName"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastName && touched.lastName ? (
                          <p className="form_error">{errors.lastName}</p>
                        ) : null}
                      </MDBCol>
                    </MDBRow>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email ID"
                      size="lg"
                      id="form6"
                      type="text"
                      name="email"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form_error">{errors.email}</p>
                    ) : null}

                    <div
                      className="d-md-flex ustify-content-start align-items-center mb-4"
                      style={{ marginTop: "2rem" }}
                    >
                      <h6 class="fw-bold mb-0 me-4">Gender:</h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        label="Female"
                        inline
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.inlineRadio && touched.inlineRadio ? (
                        <p className="form_error">{errors.inlineRadio}</p>
                      ) : null}
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        label="Male"
                        inline
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.inlineRadio && touched.inlineRadio ? (
                        <p className="form_error">{errors.inlineRadio}</p>
                      ) : null}
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        label="Other"
                        inline
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.inlineRadio && touched.inlineRadio ? (
                        <p className="form_error">{errors.inlineRadio}</p>
                      ) : null}
                    </div>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Mobile Number"
                      size="lg"
                      id="form4"
                      type="text"
                      name="number"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.number && touched.number ? (
                      <p className="form_error">{errors.number}</p>
                    ) : null}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="lg"
                      id="form5"
                      type="password"
                      name="password"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form_error">{errors.password}</p>
                    ) : null}
                    <div className="d-flex justify-content-center pt-3">
                      <MDBBtn
                        className="ms-2"
                        color="warning"
                        size="lg"
                        type="submit"
                      >
                        Submit form
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Registration;
