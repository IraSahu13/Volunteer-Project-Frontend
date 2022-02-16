import React, {Component, useEffect, useState} from 'react';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import Profile from './Profile';
import Description from './Description';
import Qualification from './Qualification';
import Skills from './Skills';
import { editJob } from '../../api';

const EditJob = () => {
  const [editjob, setEditjob]= useState([]);
  useEffect(() => {
    Promise.resolve(editJob()).then((res) => {
        console.log(res.data);
        setEditjob(res.data)
    }).catch((e) => {
        console.log({ e });
    })
    }, [])
  const [state, setState] = useState({
   
    // Personal Profile Details...
    company: editjob.company,
    title: editjob.projectTitle,
    category: editjob.category,
    experience: editjob.experience,
    type: editjob.jobType,
    location: editjob.location,
    duration: editjob.duration,
    stipend: editjob.stipend,

    // Description
    description: editjob.description,
    
    // Qualifications Required
    qualification: editjob.qualification,

    // Skills Required
     skills: editjob.skills,
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
    
    const {
    // Profile-Information
    company,
    title,
    category,
    experience,
    type,
    location,
    duration,
    stipend,

    // Description
    description,
    
    // Qualifications Required
    qualification,

    // Skills Required
     skills,
    } = state;

    const values = {
      // Profile-Information
    company,
    title,
    category,
    experience,
    type,
    location,
    duration,
    stipend,

    // Description
    description,
    
    // Qualifications Required
    qualification,

    // Skills Required
     skills,
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
            <div className="container col-lg-10 mx-auto">
              <Profile
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3 ">
            <div className="container col-lg-10 mx-auto">
              <Description
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Qualification
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Skills
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className=" justify-center mb-10" style={{ marginLeft: '47%' }}>
            <button
              variant="contained"
              type="submit"
              className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <Footer />
         </>
    );
}

export default EditJob;
