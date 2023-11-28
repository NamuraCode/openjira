import RootLayout from './layout';
import { Typography } from '@mui/material';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Home Page',
//   description: 'dashboard open-jira',
// };

export default function HomePage() {
  return (
    <RootLayout title='home'>
      <Typography variant='h1'>Hello World</Typography>
    </RootLayout>
  );
}
