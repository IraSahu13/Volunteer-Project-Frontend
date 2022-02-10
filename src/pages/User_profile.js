import React, { Component, useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { allApplicants } from '../api';
import { AppBar, Avatar, Box, Button, Card, CircularProgress, Dialog, Divider, IconButton, List, ListItem, ListItemText, Slide, Toolbar, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form,Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../../actions/userActions";
import { Alerterror, Alertsuccess } from '../components/layout/Alerts';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();
  const [text, setText] = useState("");
  // const dispatch = useDispatch();
  const history= useHistory();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const userUpdate = useSelector((state) => state.userUpdate);
  // const { loading, error, success } = userUpdate;
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    pic: "",
  });
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setUserInfo({
        name: userInfo.name,
        email: userInfo.email,
        pic: userInfo.pic,
      })
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage("Please Select an Image");
    // if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //   const data = new FormData();
    //   data.append("file", pics);
    //   data.append("upload_preset", "notezipper");
    //   data.append("cloud_name", "piyushproj");
    //   fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
    //     method: "post",
    //     body: data,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setPic(data.url.toString());
    //       console.log(pic);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   return setPicMessage("Please Select an Image");
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    // dispatch(updateProfile({ name, email, password, pic }));
  };
  return (
    <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {/* {loading && <CircularProgress />}
              {success && (
                <Alertsuccess text={Text} />
              )}
              {error && <Alerterror text= {text} />} */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setUserInfo(e.target.name=e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setUserInfo(e.target.name=e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setUserInfo(e.target.name=e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <Alerterror text={picMessage} />
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
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
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className="color-SkinColor"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} className="featured-title" variant="h6" component="div">
              Edit Profile
            </Typography>
            <Button autoFocus className="view-block" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <ProfileDetails /> */}
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
         <EditProfile />
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
                               <EditProfile />
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
                                  <div className="col-12"> 
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
                                    <div className="col-12"> 
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
                                            <h6 style={{color:'black'}}>Create an eye-catching Resume</h6>
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
                                            <h6 style={{color:'black'}}>Look for your best Project Match</h6>
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