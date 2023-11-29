import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return (
        // <AppBar position="sticky" elevation={0}>
        <AppBar position="sticky" elevation={0}>
            {/* elevation off task */}
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography>OpenJira</Typography>
            </Toolbar>
        </AppBar>
     )
  }