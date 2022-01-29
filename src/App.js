import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/vendor/flaticon.css';
import './css/vendor/fontawesome.min.css';
import './css/vendor/themify-icons.css';

import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

import About_us from './pages/About_us';
import Services from './pages/Services';
import Services_details from './pages/Services_details';
import Blog_classic from './pages/Blog_classic';
import Blog_grid from './pages/Blog_grid';
import Blog_details from './pages/Blog_details';
import Contact_01 from './pages/Contact_01';
import Contact_02 from './pages/Contact_02';
import Job_list from './pages/Job_list';
import Job_details from './pages/Job_details';
import Carrer_01 from './pages/Carrer_01';
import Error_404 from './pages/Error_404';
import Error_405 from './pages/Error_405';
import Employers_list from './pages/Employers_list';
import Employers_details from './pages/Employers_details';
import Candidate_list from './pages/Candidate_list';
import Candidate_details from './pages/Candidate_details';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import Resume from './pages/Resume/Resume';
import ScrollToTop from './components/layout/Gotop';
import Apply from './pages/Apply';
import PasswordResetForm from './pages/PasswordResetForm';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.params = {};


function App() {
 
  return (
    <div className="page">
      <Router> 
        
        <Route exact path={`/`} component={ Home2 } />
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/Home2'}`} component={ Home2 } /> 
        <Route exact path={`${process.env.PUBLIC_URL + '/Home3'}`} component={ Home3 } />  */}

        {/* <Route exact path={`${process.env.PUBLIC_URL + '/About_us'}`} component={ About_us } /> 
        <Route exact path={`${process.env.PUBLIC_URL + '/Services'}`} component={ Services } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Services_details'}`} component={ Services_details } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_classic'}`} component={ Blog_classic } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_grid'}`} component={ Blog_grid } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_details'}`} component={ Blog_details } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Contact_01'}`} component={ Contact_01 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Contact_02'}`} component={ Contact_02 } /> */}
        <Route exact path={`/job_list`} component={ Job_list } />
        <Route exact path={`/job_details`} component={ Job_details } />
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/Carrer_01'}`} component={ Carrer_01 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Error_404'}`} component={ Error_404 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Error_405'}`} component={ Error_405 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Employers_list'}`} component={ Employers_list } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Employers_details'}`} component={ Employers_details } /> */}
        <Route exact path={`/candidate_list`} component={ Candidate_list } />
        <Route exact path={`/candidate_details`} component={ Candidate_details } />
        <Route exact path={ `/login`} component={ Login } />
        <Route exact path={`/signup`} component={ Register } />
        <Route exact path={`/apply`} component={ Apply } />
        <Route exact path={`/resume`} component={ Resume } />
        <Route exact path={'/passreset'} component={PasswordResetForm} />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;


