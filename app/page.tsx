import { CustomLayout } from '@/layout';
import RootLayout from './layout';
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <RootLayout title='Home'>
      <CustomLayout>
        <Typography variant='h1'>Hello World</Typography>
      </CustomLayout>
    </RootLayout>
  );
}
