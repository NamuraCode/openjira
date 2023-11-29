import { AppBar, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
     )
  }