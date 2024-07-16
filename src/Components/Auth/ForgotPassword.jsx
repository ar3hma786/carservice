import React from 'react';
import { Button, Container, CssBaseline, TextField, Typography, Grid } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { api } from "../Config/APIConfig"; // Assuming you have an API configuration

const initialValues = {
  email: '',
  otp: '', // Added OTP field
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

function ForgotPassword() {
  const navigate = useNavigate(); // Use useNavigate hook to navigate to another route

  const handleSendOTP = async (values, { setSubmitting }) => {
    try {
      // Make an API call to send OTP
      const response = await api.post('/reset-password/send-otp', {
        email: values.email,
      });

      console.log(response.data.message);
      alert(response.data.message); // Inform user about OTP sent

    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.'); // Inform user about the failure
    }

    setSubmitting(false);
  };

  const handleVerifyOTP = async (values, { setSubmitting }) => {
    try {
      const response = await api.post('/reset-password/verify-otp', {
        email: values.email,
        otp: values.otp,
      });
  
      console.log('Verify OTP Response:', response.data);
  
      if (response.data === "OTP is valid. You can now reset your password.") {
        navigate('/update-password');
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP. Please try again.');
    }
  
    setSubmitting(false);
  };
  
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        <Typography className="text-center" variant="body2" gutterBottom>
          Enter your email address below and we'll send you an OTP to reset your password.
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ touched, errors, isSubmitting, values, setFieldValue }) => (
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={touched.email && <ErrorMessage name="email" />}
                error={touched.email && Boolean(errors.email)}
              />
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{ mt: 2, bgcolor: 'grey.800' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSendOTP(values, { setSubmitting: setFieldValue });
                    }}
                  >
                    Send OTP
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Enter OTP"
                    name="otp"
                    autoComplete="off"
                    helperText={touched.otp && <ErrorMessage name="otp" />}
                    error={touched.otp && Boolean(errors.otp)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{ mt: 2, bgcolor: 'grey.800' }}
                    onClick={async () => {
                      await handleVerifyOTP(values, { setSubmitting: setFieldValue });
                    }}
                  >
                    Verify OTP
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default ForgotPassword;