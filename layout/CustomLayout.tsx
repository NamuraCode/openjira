import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CustomLayoutProps {
  children: ReactNode;
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Box sx={{ padding: "10px 20px" }}>
        <Typography variant="subtitle2">It works</Typography>
        {children}
        </Box>
    </Box>
  );
};
