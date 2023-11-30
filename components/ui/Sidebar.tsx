import { Box, Drawer, List, Typography } from "@mui/material"

const menuItems:  string[] = [""]

export const Sidebar = () => {

    return (
        <Drawer
        anchor="left"
        open={true}
        onClose={()=>{console.log("aaaa")}}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px'}}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <List>
                    {
                        
                    }
                </List>
            </Box>
        </Drawer>
     )
  }