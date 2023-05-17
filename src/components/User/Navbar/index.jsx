import React from 'react';
// import { styled } from '@mui/material/styles';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { useFavorite } from '../../../contexts/FavoritesContext';
import Helmet from 'helmet';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '12ch',
  //       '&:focus': {
  //         width: '20ch',
  //       },
  //     },
  //   },
  // }));

const UserNavbar = () => {

  const {favorites} = useFavorite();

  return (
    
    <>
    <Helmet>
    <title>Turbo Todo</title>
    <meta name="description" content="test on react-helmet" />
    <meta name="theme-color" content="#ccc" />
    </Helmet>
    <Box sx={{ flexGrow: 1, backgroundColor:"yellow" }}>
      <AppBar position="static" sx={{background: "rgb(2,0,36) linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(158,160,167,1) 0%, rgba(90,203,135,1) 29%, rgba(87,203,138,1) 31%, rgba(0,212,255,1) 68%)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link className={styles.title} to='/'>React App | routing.json-server</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}
          >
            <Link className={styles.link} to='/'>Home</Link>
            <Link className={styles.link} to='/employees'>Employees</Link>
            <Link className={styles.link} to='/favorites'>Favorites <sup>{favorites.length}</sup></Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>

  )
}

export default UserNavbar