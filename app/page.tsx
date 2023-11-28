import RootLayout from './layout';
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <RootLayout title='Home'>
      <Typography variant='h1'>Hello World</Typography>
    </RootLayout>
  );
}
