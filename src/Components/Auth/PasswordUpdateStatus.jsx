import React from 'react';
import { Container, CssBaseline, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PasswordUpdateStatus({ status }) {
    const navigate = useNavigate();
    return (
        <Container component="main" maxWidth="xs" sx={{ padding: 0 }}>
            <CssBaseline />
            <div>
                <Typography className="text-center" variant="h5" gutterBottom>
                    {status === 'success' ? 'Password Updated Successfully' : 'Password Update Failed'}
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, padding: "0.5rem", backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
                    onClick={() => navigate("/login")}
                >
                    {status === 'success' ? 'Login' : 'Try Again'}
                </Button>
            </div>
        </Container>
    );
}

export default PasswordUpdateStatus;
