import { MenuItem, Select, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles()(() => ({
    title: {
      flex: 1,
      color: 'white',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  }))
const Header = () => {
    const { classes } = useStyles()
    const navigate = useNavigate()

    const { currency, setCurrency } = CryptoState()
    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark', 
            
          }
        })
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography
            onClick={() => navigate('/')}
            className={classes.title}
            variant='h4'>            
            Crypitt
          </Typography>
          <Select
            variant='outlined'
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
             value={currency}
             onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
          </Toolbar>        
      </Container>

    </AppBar>
    </ThemeProvider>
    
  )
}

export default Header
