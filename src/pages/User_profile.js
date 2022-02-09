import React, { Component, useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Link, useLocation, useParams } from 'react-router-dom';
import { allApplicants } from '../api';
import { Avatar, Box, Card, CircularProgress, Divider, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from '@mui/material';
import Edit_Profile from './Edit_Profile';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
      }

const User_profile = () => {

    const [allcandidates, setallcandidates] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const id = location.pathname.substring(16,)
        Promise.resolve(allApplicants(id)).then((res) => {
            console.log(res.data);
            setallcandidates(res.data)
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openProfile, setOpenProfile] = useState(false);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [AllApplications, setallInterns] = useState([]);
    useEffect(() => {
        Promise.resolve(allApplicants()).then((res) => {
            console.log(res.data.intern);
            setallInterns(res.data.intern)
        }).catch((e) => {
            console.log({ e });
        })
    }, []);
    const editProfile = () => {
         setOpenProfile(true);
        // console.log(openProfile);
         <Edit_Profile props={openProfile} />
    }
    return (
        <div className="site-main">
            <Header />

            {/* PageHeader */}
            {/* <PageHeader
                title="Profile"
                breadcrumb="p"
            /> */}
            {/* PageHeader end */}

            <div className="site-main">
                <div className="ttm-row sidebar job-sidebar clearfix" >
                    <div className="container">
                        <div className="ml-20 mb-20">
                          <div className="row">
                            <div className="col-1">
                              <Avatar
                              alt="Ira Sahu"
                              src="/static/images/avatar/1.jpg"
                              sx={{
                                '& .MuiAvatar-root': {
                                   width: 60,
                                   height: 60,
                                   ml: -0.5,
                                   mr: 1,
                                 },}}
                              /> 
                            </div>
                            <div className="col-2">
                               <h5>Ira Sahu</h5>
                               <p>Software Developer</p>
                               <Rating name="read-only" value={2} readOnly />
                            </div>
                            <div className="col-6 col-lg-7"></div>
                            
                            <div className="col-1">
                            <button className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                              ttm-btn-color-dark mr-20"
                               onClick={editProfile}>Edit Profile</button>
                            </div>
                          </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget" style={{backgroundColor:'#ece3f4'}}>
                                    <aside className="widget job-widget">
                                        {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                                        {/* <form id="list1" className="list-filter"> */}
                                            <div className=" justify-center" style={{justifyContent: 'center'}}>
                                                
                                                <p>Name</p>
                                                <p>Rating</p>
                                                <Rating name="read-only" value={2} readOnly />
                                                <p>Projects</p>
                                                <p>Applications</p>

                                            </div>
                                        {/* </form> */}
                                    </aside>
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-subfolder-1"></i>Skills</h3>
                                        <form id="list2" className="list-filter">
                                            <div  >
                                                <label className="radio">
                                                    <input type="radio" value="Digital Marketing" defaultChecked name="categories" />Digital Marketing
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="Charity & Voluntary" name="categories" />Charity & Voluntary
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="IT Contractor" name="categories" />IT Contractor
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="Estate Agency" name="categories" />Estate Agency
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="Graduate" name="categories" />Graduate
                                                </label>
                                            </div>
                                        </form>
                                    </aside>
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-expert"></i>Experince</h3>
                                        <form id="list3" className="list-filter">
                                            <div>
                                                <label className="radio">
                                                    <input type="radio" value="0Year to 1Year" name="ex_year" />0Year to 1Year
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="1Year to 2Year" name="ex_year" />1Year to 2Year
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="2Year to 3Year" name="ex_year" />2Year to 3Year
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="3Year or more" defaultChecked name="ex_year" />3Year or more
                                                </label>
                                            </div>
                                        </form>
                                    </aside>
                                    {/* <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-gender"></i>Gender</h3>
                                        <form id="list4" onSubmit={this.formSubmit} className="list-filter">
                                            <div onChange={this.onChangeValue} >
                                                <label className="radio">
                                                    <input type="radio" value="male" defaultChecked name="gender" />male
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="female" name="gender" />female 
                                                </label>
                                            </div>
                                        </form>
                                    </aside> */}
                                </div>
                                {/* <aside className="widget widget-download">
                                    <ul className="download">
                                        <li><a href="#">Download.pdf</a><i className="ti ti-files"></i></li>
                                        <li><a href="#">Download.txt</a><i className="ti ti-files"></i></li>
                                    </ul>
                                </aside> */}
                            </div>
                            <div className="col-lg-8 content-area">
                                
                                <div className="row">
                                  <h6>Projects</h6>
                                  <div className="col-lg-6 col-md-12"> 
                                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>
                           
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>JOB-2</h3>
                                                <p className="mt-2" style={{color: 'grey'}}>10-01-21</p>
                                            </div>
                                            <div className="featured-bottom">
                                                <div className="view-block">
                                                    {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                        ttm-btn-color-dark"
                                                        exact to={'/applications'}>View Details</Link> */}
                                                        <KeyboardArrowDownIcon
                                                        id="demo-customized-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        variant="contained"
                                                        disableElevation
                                                        onClick={open ? handleClose : handleClick}
                                                      ></KeyboardArrowDownIcon>
                                                </div>
                                                {open &&
                                                <div className="mt-10">
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.</p>
                                                    <div style={{position: 'relative'}}>
                                                      <span><CircularProgressWithLabel value={100} /></span>
                                                    </div>
                                                    <div >
                                                        <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                                        exact to={'/job_details'}>Details</Link>
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                     </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12"> 
                                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>
                           
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>JOB-1</h3>
                                                <p className="mt-2" style={{color: 'grey'}}>02-10-21</p>
                                            </div>
                                            <div className="featured-bottom">
                                              <div className="view-block">
                                                    {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                        ttm-btn-color-dark"
                                                        exact to={'/applications'}>View Details</Link> */}
                                                        <KeyboardArrowDownIcon
                                                        id="demo-customized-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        variant="contained"
                                                        disableElevation
                                                        onClick={open ? handleClose : handleClick}
                                                      ></KeyboardArrowDownIcon>
                                                </div>
                                                {open &&
                                                <div className="mt-10">
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.</p>
                                                    <div style={{position: 'relative'}}>
                                                      <span><CircularProgressWithLabel value={20} /></span>
                                                    </div>
                                                    <div >
                                                        <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                                        exact to={'/job_details'}>Details</Link>
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                     </div>
                                    </div>
                                    <Divider className="mt-2" />
                                    <div className="col-lg-12 mt-3">
                                    <h6>Applications</h6>
                                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>
                           
                                       <div className="featured-content">
                                           <div className="featured-title">
                                               <h3>JOB-1</h3>
                                               <p className="mt-2" style={{color: 'grey'}}>10-01-21</p>
                                           </div>
                                           <div className="featured-bottom">
                                             <div className="view-block">
                                                   {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                       ttm-btn-color-dark"
                                                       exact to={'/applications'}>View Details</Link> */}
                                                       <KeyboardArrowDownIcon
                                                       id="demo-customized-button"
                                                       aria-controls={open ? 'demo-customized-menu' : undefined}
                                                       aria-haspopup="true"
                                                       aria-expanded={open ? 'true' : undefined}
                                                       variant="contained"
                                                       disableElevation
                                                       onClick={open ? handleClose : handleClick}
                                                     ></KeyboardArrowDownIcon>
                                               </div>
                                               {open &&
                                               <div className="mt-10">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                   labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                   maecenas accumsan lacus vel facilisis.
                                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                   labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                   maecenas accumsan lacus vel facilisis.</p>
                                                   <div >
                                                   <div >
                                                      <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                      ttm-btn-color-dark mr-20"
                                                       exact to={'/application'} >Review Application</Link>
                                                       <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                      ttm-btn-color-dark mr-20"
                                                       exact to={'/job_details'}>View Job</Link>
                                                   </div>
                                                   </div>
                                               </div>
                                               }
                                           </div>
                                       </div>
                                      </div>
                                    </div>
                                    <Divider className="mt-2" />
                                    <div className="col-lg-12 mt-3">
                                      <h6>Activity</h6>
                                      <Card>
                                         <p>.</p>
                                         <p>.</p>
                                         <p>.</p>
                                         <p>.</p>
                                         <p>.</p>
                                         <p>.</p>
                                      </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default User_profile;