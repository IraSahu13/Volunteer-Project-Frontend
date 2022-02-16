import React, { Component, useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, CircularProgress, Dialog, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Paper, Slide, TextField, Toolbar, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../../actions/userActions";
import { Alerterror, Alertsuccess } from '../../components/layout/Alerts';
import { userInfo, myAppliedJobs, getResume, myProjects, myOffers, editUser } from '../../api';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',
  },
});

const ProfileDetails = (props) => {
  const [company, setCompany] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.substring(19,);
    Promise.resolve(userInfo(id)).then((res) => {
      console.log(res.data);
      setCompany(res.data);
    }).catch((e) => {
      console.log({ e });
    })
  }, [])
  const [userEdit, setUserEdit] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    title: user.title,
    address_line_1:user.address_line_1,
    address_line_2:user.address_line_2,
    zipcode:user.zipcode,
    city:user.city,
    state: user.state,
  });
  
  const {
    name,
    title,
    email,
    phone,
    address_line_1,
    address_line_2,
    zipcode,
    city,
    state,
  }= userEdit;
  const values = {

    // Profile-Information
    name: user.name,
    email: user.email,
    phone: user.phone,
    title: user.title,
    address_line_1:user.address_line_1,
    address_line_2:user.address_line_2,
    zipcode:user.zipcode,
    city:user.city,
    state: user.state,
    // Education Information


    // Project Information...


    // Experience Information


    // Extra Information

  };
  const handleFile = (e) => {
    console.log(e.target.files, "$$$");
    console.log(e.target.files[0], "&&&");
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    
    const val = e.target.value;
    console.log(val);
    setUser({
      ...state,
      [e.target.name]: val
    });
  };
  
  
  const [success, setsuccess]= useState(false);
  const [text, setText]= useState("");
  const [error, seterror]= useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let file= 
    console.log(e);
    Promise.resolve((editUser(values))).then((res)=>{
      console.log(res);
      setsuccess(true);
      setText('Your profile has been edited successfully');
      setTimeout(() => {
        setsuccess(false);
        setText('');
        window.location.reload();
      }, 3000);
    }).catch((e)=>{
      seterror(true);
      setText('Your profile cannot be updated');
      setTimeout(() => {
        seterror(false);
        setText('');
      }, 3000);
      console.log({e});
    })
  }
  const [chosen, setChosen]= useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const classes = styles();
  // const handleSubmit = (e) => {
  //   console.log("e");
  //   console.log(values);
  //   Promise.resolve((PostResume(values))).then((res)=>{
  //     console.log(res);
  //   }).catch((e)=>{
  //     console.log(e);
  //   })
  // }
  return (
    <>
      <Paper className="mt-120" >
       {success && <Alertsuccess text={text} />}
       {error && <Alerterror text={text} />}
        <Grid item xs={12} lg={12}>
          <h3>Edit Profile</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <div className='row'>
              <Grid container spacing={2} alignItems="center" item md={6} sm={12} xs={12} lg={6}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="name"
                    placeholder="Name"
                    style={{ width: '80%' }}
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    placeholder="Ttile"
                    variant="outlined"
                    style={{ width: '80%' }}
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="Phone Number"
                    variant="outlined"
                    name="phone"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.phone}
                    onChange={handleChange}
                    
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="Address Line 1"
                    variant="outlined"
                    name="address_line_1"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.address_line_1}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="Address Line 2"
                    variant="outlined"
                    name="address_line_2"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.address_line_2}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="Zipcode"
                    variant="outlined"
                    name="zipcode"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.zipcode}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="City"
                    variant="outlined"
                    name="city"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="State"
                    variant="outlined"
                    name="state"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.state}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" item md={6} sm={12} xs={12} lg={6}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                {selectedImage && (
                  <div>
                  <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                  {console.log(URL.createObjectURL(selectedImage))}
                  <br />
                  <button onClick={()=>{setChosen(false);
                     setSelectedImage(null);}}>Remove</button>
                  </div>
                )}
                <br />
               
                <br /> 
                {!chosen && <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setChosen(true);
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />}
                </Grid>
                {/*<Grid>
              <div className="mt-10">
                 <button 
                   variant="contained"
                   type="submit"
                   className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor">
                   Upload profile pic
                  </button>
              </div>
            </Grid>*/}
              </Grid>
            </div>
          </div>
        </CardContent>
      </Paper>
      <div className=" justify-center mt-10">
        <button
          variant="contained"
          type="submit"
          className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      {/*<Paper className="mt-50">
    <Grid item xs={12} lg={12}>
      <h3>Edit Resume</h3>
      <CardContent>
        <ul>
         <li>Resume_1</li>
        </ul>
      </CardContent>
      </Grid>
      </Paper>*/}
    </>
  );
}
const EditProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
        ttm-btn-color-dark mr-20"
        onClick={handleOpen}>Edit Profile</button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/*<AppBar sx={{position: 'relative', backgroundColor:'pink'}}>*/}
        <Toolbar>
          <IconButton
            edge="start"

            color='#44b700'
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} className="featured-title" variant="h6" component="div">
            Edit Profile
          </Typography>
        </Toolbar>

        {/*</AppBar>*/}
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center  mb-4">
            <ProfileDetails />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

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

  const [user, setUser] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.substring(19,);
    Promise.resolve(userInfo(id)).then((res) => {
      console.log(res.data);
      setUser(res.data);
    }).catch((e) => {
      console.log({ e });
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
  
  const [resume, setResume] = useState([]);
  useEffect(() => {
    Promise.resolve(getResume()).then((res)=>{
      const p = res.data.map((data)=>{
          return data.resumeTitle
      })
      setResume(p);
      console.log(p);
   }).catch((e)=>{
      console.log({e});
  })
  }, []);
  const [projects, setprojects] = useState([])
  useEffect(() => {
    Promise.resolve((myProjects())).then((res) => {
      console.log(res.data);
      setprojects(res.data)
    }).catch((e) => {
      console.log({ e });
    })
  }, [])
  const [offers, setOffers] = useState([])
  useEffect(() => {
    Promise.resolve((myOffers())).then((res) => {
      console.log(res.data);
      setOffers(res.data)
    }).catch((e) => {
      console.log({ e });
    })
  }, [])

  const [accepted, setAccepted]= useState(false)
  const acceptOffer = () => {
       setAccepted(true);
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
                      },
                    }}
                  />
                </div>
                <div className="col-2">
                  <h5>{user.name}</h5>
                  <p>{user.title}</p>
                  <Rating name="read-only" value={user.rating} readOnly />
                </div>
                <div className="col-6 col-lg-7"></div>

                <div className="col-1">
                  <EditProfile />
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                <div className="job_list-widget" style={{ backgroundColor: '#ece3f4' }}>

                 <aside className="widget job-widget">
                    {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                    {/* <form id="list1" className="list-filter"> */}
                    <div className="justify-center pt-1">
                      <ul>
                        <li>{`Name: ${user.name}`}</li>
                        <li>{`Email: ${user.email}`}</li>
                        <li>{`Phone: ${user.phone ? user.phone : ""}`}</li>
                        <li>{`Address: ${user.address ? user.address : ""}`}</li>
                      </ul>
                    </div>
                    {/* </form> */}
                  </aside>
                 <aside className="widget job-widget pt-1">
                  {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                  {/* <form id="list1" className="list-filter"> */}
                      <ul className="mt-10">
                        <li><a href= "#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href= "#offers">Offers</a></li>
                      </ul>
                  {/* </form> */}
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
              
                <div className="featuredbox-number pr-30 pr-lg-0 pb-lg-50 pt-md-20">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                        <i className="ttm-num ti-info"></i>
                      </div>
                    </div>
                    <div className="featured-content ">
                      <div>
                        <h6 style={{ color: 'black' }}>Create an eye-catching Resume</h6>
                      </div>

                    </div>
                  </div>{/* featured-icon-box end */}
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                        <i className="ttm-num ti-info"></i>
                      </div>
                    </div>
                    <div className="featured-content ttm-bgcolor-grey">
                      <div className="">
                        <h6 style={{ color: 'black' }}>Look for your best Project Match</h6>
                      </div>

                    </div>
                  </div>
                 </div>
                </div>
              <div className="col-lg-8 content-area">

                <div className="row">
                  <h6 id="projects">Projects</h6>
                  {projects?.map((project) => (
                    <div className="col-12">
                      <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>

                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>{project.name}</h3>
                            <p className="mt-2" style={{ color: 'grey' }}>{project.date}</p>
                          </div>
                          <div className="featured-bottom">
                            <div className="view-block">
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
                                <div style={{ position: 'relative' }}>
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
                  ))}
                  
                  <Divider className="mt-2" />
                  <Link exact to= {"/edit_resume"}>
                  <div className="col-lg-12 mt-3">
                    <h6 id="resume">Resume</h6>
                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>

                      <div className="text-size-2">
                        <ul>
                          { resume?.map((cv, index) => (<li>{cv}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <Divider className="mt-2" />
                  <h6 id="offers">Offers</h6>
                  {offers?.map((offer) => (
                    <div className="col-12">
                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>

                      <div className="featured-content">
                        <div className="featured-title">
                          <h3>{offer.name}</h3>
                          <p className="mt-2" style={{ color: 'grey' }}>{offer.date}</p>
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
                              <p>{offer.description}</p>
                              <div >
                                <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                  exact to={'/job_details'}>View Details</Link>
                                <button className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                ttm-btn-color-dark mr-20" onClick={acceptOffer}> Accept</button>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  <div className="col-12">
                    <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>

                      <div className="featured-content">
                        <div className="featured-title">
                          <h3>JOB-1</h3>
                          <p className="mt-2" style={{ color: 'grey' }}>02-10-21</p>
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
                                <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                  exact to={'/job_details'}>Accept</Link>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className="col-lg-12 mt-3">
                    <h6>Activity</h6>
                    <Card>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                    </Card>
                        </div> */}
                      </div>
                  </div>
               </div>
             </div>
           </div>
          </div>
          {/* row end */}
        
      <Footer />

    </div>
  )
}

export default User_profile;