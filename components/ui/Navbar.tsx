import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    // <AppBar position="sticky" elevation={0}>
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h2" >OpenJira</Typography>
            </Toolbar>
        </AppBar>
     )
  }