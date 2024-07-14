import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authentication/Action';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    const userData = { ...values, role: 'USER' };
    dispatch(registerUser({ userData, navigate }));
    setSubmitting(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5" sx={{ mb: 2 }}>
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                    helperText={touched.firstName && <ErrorMessage name="firstName" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    helperText={touched.lastName && <ErrorMessage name="lastName" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    helperText={touched.email && <ErrorMessage name="email" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    helperText={touched.password && <ErrorMessage name="password" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    helperText={touched.confirmPassword && <ErrorMessage name="confirmPassword" />}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, padding: "0.5rem", backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
                disabled={isSubmitting}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Already have an account?{' '}
          <Button onClick={() => navigate('/login')}>Login</Button>
        </Typography>
      </div>
    </Container>
  );
};

export default RegisterForm;
