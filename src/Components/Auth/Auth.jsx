import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import PasswordUpdateStatus from './PasswordUpdateStatus';

function Auth() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnClose = () => navigate("/");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        outline: "none",
        boxShadow: 24,
        p: 4,
    };

    const renderForm = () => {
        switch (location.pathname) {
            case "/register":
                return <RegisterForm />;
            case "/login":
                return <LoginForm />;
            case "/forgot-password":
                return <ForgotPassword />;
            case "/update-password":
                return <ResetPassword />;
            case "/update-password-completed":
                return <PasswordUpdateStatus />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Modal onClose={handleOnClose} open={
                location.pathname === "/register" ||
                location.pathname === "/login" ||
                location.pathname === "/forgot-password" ||
                location.pathname === "/update-password" ||
                location.pathname === "/update-password-completed"
            }>
                <Box sx={style}>
                    {renderForm()}
                </Box>
            </Modal>
        </div>
    );
}

export default Auth;
