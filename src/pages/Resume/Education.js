import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
import 'date-fns';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import { Footer } from '../../components/layout/Footer';

const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',  
  },
});
const Profile = (props) => {
  const Continue = (e) => {
    e.preventDefault ();
    props.nextStep ();
  };

  const back = (e) => {
    e.preventDefault ();
    props.prevStep ();
  };

  const classes = styles();
  const {values} = props;

    return (
    <>
      {/* <Header />
      <PageHeader
        title= "Resume"
        breadcrumb="education"
      /> */}
        <Grid item xs={12} lg={12}>
         <h3>Education</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{width: '80%'}}
                  required
                  value={values.college}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromYearClg"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromYearClg}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                        {/* <DateRangeIcon /> */}
                        </InputAdornment>
                      
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toYearClg"
                  type="date"
                  label=""
                  style={{width: '80%'}}
                  required
                  value={values.toYearClg}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment >
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Percentage"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="percentageClg"
                  required
                  value={values.percentageClg}
                  onChange={props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="school"
                  label="School"
                  style={{width: '80%'}}
                  required
                  value={values.school}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromYearSchl"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromYearSchl}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                    <>
                      
                      <InputAdornment position="start">
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    </>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toYearSchl"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.toYearSchl}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment className="hiddenLabel" position="start">
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Percentage"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="percentageSchl"
                  required
                  value={values.percentageSchl}
                  onChange={props.handleChange}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        {/* <Container className={classes.margin} style={{marginTop: '2rem'}}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col lg={1} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={Continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container> */}
        {/* <p className="text-center text-muted">Page 2</p> */}
      {/* <Footer /> */}
    </>
    );
  }

export default Profile;