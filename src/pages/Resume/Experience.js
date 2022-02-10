import React, {Component, useState} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
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

const Experience=(props)=>{
  const classes = styles();
  const values = [];

  const Continue = e => {
    e.preventDefault ();
    props.nextStep ();
  };

  const Back = e => {
    e.preventDefault ();
    props.prevStep ();
  };

  const [insti1, setinsti1] = useState('');
  const [pos1, setpos1] = useState('');
  const [duration1, setduration1] = useState('');
  const [des1, setdes1] = useState('');

  const [insti2, setinsti2] = useState('');
  const [pos2, setpos2] = useState('');
  const [duration2, setduration2] = useState('');
  const [des2, setdes2] = useState('');

  // const createAndDownloadPDF = () => {
  //   axios
  //     .post ('/create-pdf', this.props.values)
  //     .then (() => {
  //       axios
  //         .get ('fetch-pdf', {responseType: 'blob'})
  //         .then (res => {
  //           const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
  //           saveAs (pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
  //         })
  //         .catch (err => {
  //           console.log (err);
  //         });
  //     })
  //     .catch (err => {
  //       console.log (err);
  //     });
  // };

    return (
    <>
      {/* <Header />
      <PageHeader 
          title= "Resume"
          breadcrumb="experience"
      /> */}
      <Paper className={classes.padding}>
        <Card>
          <CardHeader style={{color: '#e63c80', fontWeight:600}} titleTypographyProps={{variant:'h4' }} title="Experience Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 1</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute1"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={insti1}
                  onChange={(e)=>{setinsti1(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position1"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={pos1}
                  onChange={(e)=>{setpos1(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration1"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={duration1}
                  onChange={(e)=>{setduration1(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  name="experienceDescription1"
                  required
                  value={des1}
                  onChange={(e)=>{setdes1(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="flex-start" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 2</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute2"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={insti2}
                  onChange={(e)=>{setinsti2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position2"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={pos2}
                  onChange={(e)=>{setpos2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration2"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={duration2}
                  onChange={(e)=>{setduration2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  rows={3}
                  name="experienceDescription2"
                  required
                  value={des2}
                  onChange={(e)=>{setdes2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        {/* <Container className={classes.margin}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                startIcon={<NavigateBeforeIcon />}
                onClick={Back}
              >
                Back
              </Button>
            </Col>
            <Col lg={1} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                endIcon={<NavigateNextIcon />}
                onClick={Continue}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 4</p> */}
      </Paper>
      {/* <Footer /> */}
    </>
    );
  }

export default Experience;