import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@/themes";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import { CustomLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title
}: {
  children: React.ReactNode;
  title: string
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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>
          <CustomLayout>
            {children}
          </CustomLayout>
          </body>
      </ThemeProvider>
    </html>
  );
}
