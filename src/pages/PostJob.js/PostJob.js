import React, {Component, useState} from 'react';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import Profile from './Profile';
import Description from './Description';
import Qualification from './Qualification';
import Skills from './Skills';

const PostJob = () => {
  const [state, setState] = useState({
    step: 1,
    // Personal Profile Details...
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',

    // Education Information
    college: '',
    fromyear1: '',
    toyear1: '',
    qualification1: '',
    description1: '',
    school: '',
    fromyear2: '',
    toyear2: '',
    qualification2: '',
    description2: '',

    // Project Information...
    title1: '',
    link1: '',
    projectDescription1: '',
    title2: '',
    link2: '',
    projectDescription2: '',
    title3: '',
    link3: '',
    projectDescription3: '',

    // Experience Information
    institute1: '',
    position1: '',
    duration1: '',
    experienceDescription1: '',
    institute2: '',
    position2: '',
    duration2: '',
    experienceDescription2: '',

    // Extra Information
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    interest6: '',
  });

  
  const handleChange = (e) => {
    e.preventDefault();
    const val= e.target.value;
    console.log(val);
    setState ({
      ...state,
      [e.target.name]: val});
  };
  const handleSubmit = (e) => {
    console.log(e);
  }
    const {step} = state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    } = state;

    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    };
    // console.log(company);
    return (
         <>
           <Header />
           <PageHeader
            title="Post an Opportunity"
            breadcrumb="post opportunity"
           />
              
         
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center mb-4">
              <Profile
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3 ">
            <div className="container col-lg-10 mx-auto text-center mb-4">
              <Description
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-8 mx-auto text-center mb-4">
              <Qualification
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center mb-4">
              <Skills
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <Footer />
         </>
    );
}

export default PostJob;
