import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem, styled } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';

const Component = styled(Menu)`
    margin-top : 5px;
`;

function Profile({ account, setAccount, setToken }) {

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        // console.log(open)
        setOpen(null);
    }

    const logout = () => {
        Cookies.remove('auth_token')
        setAccount('')
        setToken('')
    }

  return (
    <>
    <div>
        <div className='flex items-center gap-2 cursor-pointer' onClick={(event) => handleClick(event)}>
            <AccountCircleIcon fontSize='large' color='secondary' />
            <h2>{account}</h2>
        </div>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem  onClick={() => {handleClose(); logout();}}>
                <LogoutIcon style={{ fontSize:20, paddingRight:4 }} color = "secondary"/>
                <h2>Logout</h2>
            </MenuItem>
        </Component>
    </div>
    </>
  )
}

export default Profile