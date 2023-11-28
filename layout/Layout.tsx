import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";
import type { Metadata } from 'next'

interface layoutProps {
  children: ReactNode;
  title: string;
}
 
export function generateMetadata({ title }: layoutProps): Metadata {
  return {
    title: title,
  }
}

export const Layout = ({ title = 'opernJira', children }: layoutProps) => {
  
  return (
    <Box sx={{flexFlow:1}}>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  );
};
