import { Box } from "@mui/material"
import { ReactNode } from "react"

interface CustomLayoutProps {
    children: ReactNode
}

export const CustomLayout = ({children}: CustomLayoutProps) => {

    return (
      <Box>
        {children}
       </Box>
     )
  }