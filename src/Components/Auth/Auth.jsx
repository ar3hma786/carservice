import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Modal, Box } from '@mui/material';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

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

  return (
    
    <div>
        <Modal onClose = {handleOnClose} open = {
            location.pathname === "/register" || location.pathname === "/login"
        }>

          <Box sx = {style}> 
              {location.pathname==="/register"?<RegisterForm/>:<LoginForm/>}
          </Box>

         
        </Modal>
    </div>
  )
}

export default Auth