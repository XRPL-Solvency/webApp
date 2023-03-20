import {useState } from "react";
import { NavLink } from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Stack, Button, Typography, createTheme, ThemeProvider, Hidden, Drawer, List, ListItem, ListItemText} from '@mui/material';
import logo from './nav_logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
components: {
MuiButton: {
styleOverrides: {
root: {
fontSize: '16px',
},
},
},
MuiAppBar: {
styleOverrides: {
root: {
color: 'white',
paddingTop: '20px',
paddingBottom: '20px',
},
},
},
},
});

function Navbar(){
const [isOpen, setIsOpen] = useState(false);
const [width, setWidth] = useState(window.innerWidth);

window.onresize = () => {
setWidth(window.innerWidth);
}

return (
<ThemeProvider theme={theme}>
<AppBar position="static" sx={{bgcolor:"#0b0b0b"}} >
<Toolbar>
<IconButton size='medium' edge='start' aria-label='logo' component={NavLink} to='/'>
<img src={logo}alt='logo-horae' width="40%" height="40%"/>
</IconButton>
<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
<Stack direction='row' spacing={2}>
<Hidden smDown>
<Button color='inherit' component={NavLink} to='/' style={{display: width < 800 ? 'none' : 'block'}}>Home</Button>
<Button color='inherit' component={NavLink} to='/generateproof' style={{display: width < 800 ? 'none' : 'block'}}>Generate Proof</Button>
<Button color='inherit' component={NavLink} to='/verifyproof' style={{display: width < 800 ? 'none' : 'block'}}>Verify Proof</Button>
<Button color='inherit' component={NavLink} to='/zktransfer' style={{display: width < 800 ? 'none' : 'block'}}>Zk transfer</Button>


</Hidden>
<Hidden mdUp>
<IconButton onClick={() => setIsOpen(!isOpen)} style={{display: width >= 800 ? 'none' : 'block'}}>
<MenuIcon style={{color:'white'}} />
</IconButton>
</Hidden>
</Stack>
</Toolbar>
<Drawer anchor='top' open={isOpen} onClose={() => setIsOpen(false)}>
  <List>
    <ListItem button component={NavLink} to='/' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Home'/>
    </ListItem>
    <ListItem button component={NavLink} to='/generateproof' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Generate Proof'/>
    </ListItem>
    <ListItem button component={NavLink} to='/verifyproof' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Verify Proof'/>
    </ListItem>
    <ListItem button component={NavLink} to='/zktransfer' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Zk transfer'/>
    </ListItem>
    
  </List>
</Drawer>
</AppBar>
</ThemeProvider>
)
}

export default Navbar;
