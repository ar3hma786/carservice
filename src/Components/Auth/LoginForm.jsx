import React from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { loginUser } from '../State/Authentication/Action';

const initialValues = {
    email: '',
    password: '',
};



function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(loginUser({ userData: values, navigate }));
    };

    const handleGoogleSuccess = (response) => {
        console.log('Google sign-in success:', response);
        // Handle the response, e.g., send the token to the server for validation
    };

    const handleGoogleFailure = (error) => {
        console.error('Google sign-in error:', error);
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Container component="main" maxWidth="xs" sx={{ padding: 0 }}>
                <CssBaseline />
                <div>
                    <Typography className="text-center" variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <Formik
                        initialValues={initialValues}
     
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validateOnChange={true}
                    >
                        {({ touched }) => (
                            <Form>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    helperText={touched.email && <ErrorMessage name="email" />}
                                    sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }}
                                />
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    helperText={<ErrorMessage name="password" />}
                                    sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2, padding: "0.5rem", backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
                                >
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                        Don't have an account?{" "}
                        <Button onClick={() => navigate("/register")}>
                            Register
                        </Button>
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 3, mb: 3 }}>
                        Or sign in with
                    </Typography>
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        buttonText="Sign in with Google"
                        cookiePolicy="single_host_origin"
                        style={{ marginTop: '1rem' }}
                    />
                </div>
            </Container>
        </GoogleOAuthProvider>
    );
}

export default LoginForm;
