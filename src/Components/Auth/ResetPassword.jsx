import React from 'react';
import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    newPassword: '',
    confirmPassword: '',
};

const validationSchema = Yup.object({
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const handleSubmit = (values) => {
    // Implement password reset logic here
    console.log('New password:', values.newPassword);
};

function ResetPassword() {
   const navigate = useNavigate();
    
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
                    {({ touched }) => (
                        <Form>
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
                                helperText={touched.newPassword && <ErrorMessage name="newPassword" />}
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
                                helperText={touched.confirmPassword && <ErrorMessage name="confirmPassword" />}
                                sx={{ height: '50px', '& .MuiInputBase-input': { padding: '15px 10px' } }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, padding: "0.5rem", backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
                                onClick={() => navigate("/update-password-completed")}
                            >
                                Reset Password
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
}

export default ResetPassword;
