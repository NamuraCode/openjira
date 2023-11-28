import { Layout } from '@/layout';
import { Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'dashboard open-jira',
};

export default function HomePage() {
  metadata.title = 'home'
  return (
    <Layout>
      <Typography variant='h1'>Hello World</Typography>
    </Layout>
  );
}
