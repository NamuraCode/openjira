import { CustomLayout } from '@/layout';
import RootLayout from './layout';

import { Card, CardHeader, Grid, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <RootLayout title='Home - OpenJira'>
      <CustomLayout>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card>
              <CardHeader title={"To do"}></CardHeader>
            </Card>
          </Grid>
        </Grid>
      </CustomLayout>
    </RootLayout>
  );
}
