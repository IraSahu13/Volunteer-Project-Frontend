import React, {Component} from 'react';
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
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Qualification extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  createAndDownloadPDF = () => {
    axios
      .post ('/create-pdf', this.props.values)
      .then (() => {
        axios
          .get ('fetch-pdf', {responseType: 'blob'})
          .then (res => {
            const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
            saveAs (pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
          })
          .catch (err => {
            console.log (err);
          });
      })
      .catch (err => {
        console.log (err);
      });
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
    <>
      {/* <Header />
      <PageHeader 
          title= "Resume"
          breadcrumb="experience"
      /> */}
      <Paper className={classes.padding}>
        <Card>
          <CardHeader style={{color: '#e63c80', fontWeight:600}} titleTypographyProps={{variant:'h4' }} title="Qualifications Required" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} className="ml-0" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="qualification"
                  label="Qualifications Required"
                  style={{width: '80%'}}
                  required
                  value={values.college}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </div>
        </CardContent>
        <Container className={classes.margin}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col lg={1} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 3</p>
      </Paper>
      {/* <Footer /> */}
    </>
    );
  }
}

export default withStyles (styles) (Qualification);