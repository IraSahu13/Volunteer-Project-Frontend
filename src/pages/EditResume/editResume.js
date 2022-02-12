import React, { Component, useState, useEffect } from 'react';
import Profile from './Profile';
import Education from './Education';
import Projects from './Project';
import Experience from './Experience';
import Extras from './Extras';
import { TextField, Button, Container, Divider } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Paper, withStyles, Grid } from '@material-ui/core';
import ResumeTitle from './ResumeTitle';
import { editResume, getResume, PostResume } from '../../api';
import { Alertsuccess } from '../../components/layout/Alerts';

const EditResume = ({data,i}) => {

  const [success, setsuccess] = useState()
  const [text, settext] = useState('')
  const [state, setState] = useState({
    step: 1,
    resumeTitle:data.resumeTitle,
    // Personal Profile Details...
    name: data.name,
    email: data.email,
    phone: data.phone,
    github: data.github,
    linkedin: data.linkedin,
    facebook: data.facebook,

    // Education Information
    college: data.college,
    fromYearClg: data.fromYearClg,
    toYearClg: data.toYearClg,
    percentageClg: data.percentageClg,
    school: data.school,
    fromYearSchl: data.fromYearSchl,
    toYearSchl: data.toYearSchl,
    percentageSchl: data.percentageSchl,

    // Project Information...
    title: data.title,
    link: data.link,
    projectDescription: data.projectDescription,

    // Experience Information
    companyName: data.companyName,
    position: data.position,
    duration: data.duration,
    experienceDescription: data.experienceDescription,

    // Extra Information
    skill1: data.skill1,
    skill2: data.skill2,
    skill3: data.skill3,
    interest1: data.interest1,
    interest2: data.interest2,
    interest3: data.interest3,
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
  const handleEdit = (e) => {
    i==0&&window.scrollTo(0, 250);
    i==1&&window.scrollTo(0, 2400);
    i==2&&window.scrollTo(0, 4600);
  }
  const handleSubmit = (e) => {
    console.log("e");
    console.log(values);
    Promise.resolve((editResume(values))).then((res)=>{
      console.log(res);
      setsuccess(true)
      settext(`Edited Resume ${resumeTitle} successfully`);
      setTimeout(() => {
        setsuccess(false)
        settext(``);
      }, 3000);
    }).catch((e)=>{
      console.log({e});
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
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <ResumeTitle
            handleChange={handleChange}
            values={values}
            i={i}
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
      <div className='justify-center'>{success&&<Alertsuccess text={text}/>}</div>
      <div className=" justify-center mb-10" style={{ marginLeft: '37%' }}>
        <button
          variant="contained"
          type="submit"
          className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor mr-10"
          onClick={handleEdit}
        >
          Edit {data.resumeTitle} Resume
        </button>
        <button
          variant="contained"
          type="submit"
          className="btn btn-primary ml-10 font-weight-bold"
          onClick={handleSubmit}
        >
          Save Details
        </button>
      </div>
    </>

  );

}

export default EditResume;