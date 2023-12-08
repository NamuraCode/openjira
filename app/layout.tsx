"use client";
import { Inter } from "next/font/google";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

import { UiProvider } from "@/context/ui";
import { EntriesProvider } from "@/context/entries";

import { darkTheme, lightTheme } from "@/themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link rel="shortcut icon" href="/next.svg" />
      </head>
      <EntriesProvider>
        <UiProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </UiProvider>
      </EntriesProvider>
    </html>
  );
}
