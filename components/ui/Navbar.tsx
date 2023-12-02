"use client"

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { UiContext } from "@/context/ui";

export const Navbar = () => {
    const { openSideMenu } = useContext( UiContext )

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={openSideMenu}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" >OpenJira</Typography>
            </Toolbar>
        </AppBar>
     )
  }