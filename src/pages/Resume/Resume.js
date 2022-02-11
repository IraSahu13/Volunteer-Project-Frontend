import React, { Component, useState } from 'react';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import Profile from './Profile';
import Education from './Education';
import Projects from './Project';
import Experience from './Experience';
import Extras from './Extras';
import { TextField, Button, Container, Divider } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Paper, withStyles, Grid } from '@material-ui/core';
import ResumeTitle from './ResumeTitle';
import { PostResume } from '../../api';

const Resume = () => {
  const [state, setState] = useState({
    step: 1,
    resumeTitle:'abc',
    // Personal Profile Details...
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    facebook: '',

    // Education Information
    college: '',
    fromYearClg: '',
    toYearClg: '',
    percentageClg: '',
    school: '',
    fromYearSchl: '',
    toYearSchl: '',
    percentageSchl: '',

    // Project Information...
    title: '',
    link: '',
    projectDescription: '',

    // Experience Information
    companyName: '',
    position: '',
    duration: '',
    experienceDescription: '',

    // Extra Information
    skill1: '',
    skill2: '',
    skill3: '',
    interest1: '',
    interest2: '',
    interest3: '',
  });


  const handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    console.log(val);
    setState({
      ...state,
      [e.target.name]: val
    });
  };
  const handleSubmit = (e) => {
    console.log("e");
    console.log(values);
    Promise.resolve((PostResume(values))).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }
  const { step } = state;
  const {
    resumeTitle,
    // Profile-Information
    name,
    email,
    phone,
    github,
    linkedin,
    facebook,

    // Education Information
    college,
    fromYearClg,
    toYearClg,
    percentageClg,
    school,
    fromYearSchl,
    toYearSchl,
    percentageSchl,

    // Project Information...
    title,
    link,
    projectDescription,

    // Experience Information
    companyName,
    position,
    duration,
    experienceDescription,

    // Extra Information
    skill1,
    skill2,
    skill3,
    interest1,
    interest2,
    interest3,
  } = state;

  const values = {

    resumeTitle,
    // Profile-Information
    name,
    email,
    phone,
    github,
    linkedin,
    facebook,

    // Education Information
    college,
    fromYearClg,
    toYearClg,
    percentageClg,
    school,
    fromYearSchl,
    toYearSchl,
    percentageSchl,

    // Project Information...
    title,
    link,
    projectDescription,

    // Experience Information
    companyName,
    position,
    duration,
    experienceDescription,

    // Extra Information
    skill1,
    skill2,
    skill3,
    interest1,
    interest2,
    interest3,
  };
  // switch (step) {
  //   case 1:
  return (
    <>
      <Header />
      <PageHeader
        title="Resume"
        breadcrumb="resume"
      />
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <ResumeTitle
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Profile
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Education
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-8 mx-auto text-center  mb-4">
          <Projects
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Experience
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3 mb-5">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Extras
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className=" justify-center" style={{ marginLeft: '45%' }}>
        <button
          variant="contained"
          type="submit"
          className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>

  );

}

export default Resume;