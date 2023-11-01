import { Layout } from '@/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'dashboard open-jira',
};

export default function HomePage() {
  return (
    <Layout>
      <h1>Hola mundo</h1>
    </Layout>
  );
}
