import React from 'react';
import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import { api } from "../Config/APIConfig";

const initialValues = {
    email: '', // Include email field in initial values
    newPassword: '',
    confirmPassword: '',
};

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'), // Validate email format
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const ResetPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await api.put('/reset-password/update-password', {
                email: values.email,
                newPassword: values.newPassword,
            });
            // Handle success or further navigation here
            console.log('Password reset successful:', response.data); // Example logging
            navigate("/login");
        } catch (error) {
            console.error('Password reset failed:', error);
            // Handle error states if needed
        } finally {
            setSubmitting(false); // Ensure to reset submitting state
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ padding: 0 }}>
            <CssBaseline />
            <div>
                <Typography className="text-center" variant="h5" gutterBottom>
                    Reset Password
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    {({ touched, isSubmitting }) => (
                        <Form>
                            <Field
                                as={TextField}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                id="email"
                                autoComplete="email"
                                helperText={<ErrorMessage name="email" />}
                                sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }} 
                            />
                            <Field
                                as={TextField}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="New Password"
                                name="newPassword"
                                type="password"
                                id="newPassword"
                                autoComplete="new-password"
                                helperText={<ErrorMessage name="newPassword" />}
                                sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }}
                            />
                            <Field
                                as={TextField}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                                helperText={<ErrorMessage name="confirmPassword" />}
                                sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting} // Disable button while submitting
                                sx={{ mt: 2, padding: "0.5rem", backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Reset Password'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default ResetPassword;
