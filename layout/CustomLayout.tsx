import { Navbar } from "@/components";
import { Sidebar } from "@/components/ui/Sidebar";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CustomLayoutProps {
  children: ReactNode;
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
