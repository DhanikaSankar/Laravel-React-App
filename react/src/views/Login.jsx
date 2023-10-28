import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
} from "mdb-react-ui-kit";
import loginSchema from "../schemas";

function Login() {
    const onSubmit =(values)=>{
        console.log(values);
    }
    const {values,errors,touched,handleSubmit,handleBlur,handleChange,isSubmitting} = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginSchema,
        onSubmit,
    })

    return (

        <MDBContainer className="my-5">
            <MDBCard>
                <MDBRow className="g-0">
                    <MDBCol md="6">
                        <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form"
                            className="rounded-start w-100"
                            style={{ height: "65%" }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBCardBody className="d-flex flex-column">
                            <div className="d-flex flex-row mt-2">
                                <MDBIcon
                                    fas
                                    icon="cubes fa-3x me-3"
                                    style={{ color: "#ff6219" }}
                                />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5
                                className="fw-normal my-4 pb-3"
                                style={{ letterSpacing: "1px" }}
                            >
                                Sign into your account
                            </h5>
                            <form onSubmit={handleSubmit} autoComplete="off">

                            <MDBInput
                                wrapperClass="mb-4"
                                label="Email address"
                                id="email"
                                type="email"
                                size="lg"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="email"
                            />
                            {errors.email && touched.email && <p className="form-error">{errors.email}</p>}

                            <MDBInput
                                wrapperClass="mb-4"
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                                size="lg"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}

                            />
                            {errors.password && touched.password && <p className="form-error">{errors.password}</p>}


                            <MDBBtn
                                className="mb-4 px-5"
                                color="dark"
                                size="lg"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Login
                            </MDBBtn>
                            <p
                                className="mb-5 pb-lg-2"
                                style={{ color: "#393f81" }}
                            >
                                Don't have an account?{" "}
                                <a href="#!" style={{ color: "#393f81" }}>
                                    <Link to={'/signup'}> Register here</Link>
                                </a>
                            </p>
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login;
