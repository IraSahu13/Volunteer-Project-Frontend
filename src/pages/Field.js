import { Card, CardHeader, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { Footer } from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageHeader from '../components/layout/PageHeader';


const Field = () => {
  return (
  <div>
      <Header />
      <PageHeader
       title = "Post a Field"
       breadcrumb="field"
      />
      <div className="container col-lg-10 mx-auto text-center">
      <Paper>
        <Card>
          <CardHeader title="Post a Vacancy" />
        </Card>
        <div >
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid >
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company"
                  label="Company"
                  style={{width: '80%'}}
                  required
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Project Title"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="title"
                  required
                />
              </Grid>
            </Grid >
        </div>
      </Paper>
      </div>
      <Footer />
  </div>
  );
};

export default Field;
