import { CustomLayout } from '@/layout';
import RootLayout from './layout';

import { Card, CardHeader, Grid, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <RootLayout title='Home - OpenJira'>
      <CustomLayout>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )'}}>
              <CardHeader title={"To do"}></CardHeader>
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )'}}>
              <CardHeader title={"In progress"}></CardHeader>
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )'}}>
              <CardHeader title={"Completed"}></CardHeader>
            </Card>
          </Grid>
        </Grid>
      </CustomLayout>
    </RootLayout>
  );
}
