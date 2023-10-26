import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Login() {
    // const initialValues ={}
    // const validationSchema ={}
    // const onSubmit ={}

    return (
        // <Formik
        //     initialValues={initialValues}
        //     validationSchema={validationSchema}
        //     onSubmit={onSubmit}
        // >
        //     <Form>
        //         <Field type="text" name="email" />
        //         <ErrorMessage name="email"/>
        //     </Form>
        // </Formik>
        <Card
            style={{
                marginLeft: "500px",
                marginTop: "200px",
                width: "500px",
                padding: "50px",
            }}
        >
            <h4>Login to your Account</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                Not Registered ? <Link to="/signup"> Create an account</Link>
            </Form>
        </Card>
    );
}

export default Login;
