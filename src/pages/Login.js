import React, { Component, useState } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { login } from '../api';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { useForm } from 'use-form-fields';
import { Alerterror } from '../components/layout/Alerts';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#e0d1ed',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};
const Login = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [aMonth, setAMonth] = useState(false);
    const [user, setUser] = useState(true);
    const [employer, setEmployer] = useState(true);

    const [useremail, setuseremail] = useState("");
    const [userpass, setuserpass] = useState("");

    const [companyemail, setcompanyemail] = useState("");
    const [companypass, setcompanypass] = useState("");

    const [candidateOn, setCandidateOn] = useState(false);
    const [employerOn, setEmployerOn] = useState(false);

    const [error, setError] = useState(false);
    const [text, setText] = useState("");

    const history = useHistory();

    const rememberPass = () => {
        setAMonth(true);
    }
    const [fields, handleFieldChange] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [confirmed, setConfirmed] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSendingCode, setIsSendingCode] = useState(false);

    const CandidateLogin = async (e) => {
        e.preventDefault();
        if (useremail === "") {
            setError(true);
            setText("Missing Credentials");
            return;
        }

        if (useremail !== "") {

            setCandidateOn(true);
            Promise.resolve(login({ email: useremail, password: userpass, status: "user", aMonth: aMonth })).then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("status", res.data.status);
                history.push('/');
                // window.location.reload();
            }).catch((e) => {
                console.log(e.response?.data?.error);
                setError(true);
                setText(e.response?.data?.error);
            })
        }
    }
    const EmployerLogin = async (e) => {
        if (companyemail === "") {
            setError(true);
            setText("Missing Credentials");
            return;
        }
        e.preventDefault();
        Promise.resolve(login({ email: companyemail, password: companypass, status: "company", aMonth: aMonth })).then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("status", res.data.status);
            history.push('/');
            // window.location.reload();
        }).catch((e) => {
            console.log(e.response);
            setError(true);
            setText(e.response);
        })

    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (

        <div className="site-main">
            <Header />

            {/* PageHeader */}
            {/*<PageHeader
                title="Login"
                breadcrumb="Login"
            />*/}
            {/* PageHeader end */}


            {/* login */}
            <div className="ttm-row login-section clearfix">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">
                                    <div className="text-center mb-20">
                                        <h3>Login To Your Account</h3>
                                    </div>
                                    <div className="ttm-tabs ttm-tab-style-02">
                                        <Tabs>
                                            <TabList className="tabs">
                                                <Tab className="tab" >
                                                    <a>
                                                        <i className="flaticon flaticon-research"></i>
                                                        <span>Candidate</span><h5>Login as a Candidate</h5>
                                                    </a>
                                                </Tab>
                                                <Tab className="tab">
                                                    <a>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                        <span>Employer</span><h5>Login as an Employer</h5>
                                                    </a>
                                                </Tab>
                                            </TabList>
                                            <div className="content-tab">
                                                {error && <Alerterror text={text} />}
                                                <TabPanel>
                                                    <form id="login_form" className="login_form wrap-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-email"></i>
                                                                    <input value={useremail} onChange={(e) => {
                                                                        setuseremail(e.target.value)
                                                                    }} type="email" id="txtemail" placeholder="Email Address" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-lock"></i>
                                                                    <input value={userpass} onChange={(e) => {
                                                                        setuserpass(e.target.value)
                                                                    }} type="password" id="password" placeholder="Password" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <label>
                                                                    <div className="forgot-pwd text-center mt-5">
                                                                        <p onClick={handleOpen}>Forgot Password</p>
                                                                        <Modal
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                        >
                                                                            <Box sx={style}>
                                                                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                                                                    Reset Password</Typography>
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="email"
                                                                                    label="Email"
                                                                                    style={{ width: '80%', marginTop: '10%' }}
                                                                                    required
                                                                                // value={fields.email}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="pass"
                                                                                    label="New Password"
                                                                                    style={{ width: '80%' }}
                                                                                    required
                                                                                // value={fields.password}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="passcheck"
                                                                                    label="Confirm Password"
                                                                                    style={{ width: '80%' }}
                                                                                    required
                                                                                // value={fields.confirmPassword}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <div className="justify-center mt-2">
                                                                                    <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" onClick={handleClose}>Submit</button>
                                                                                </div>
                                                                            </Box>
                                                                        </Modal>
                                                                        <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" onClick={rememberPass} />
                                                                        <span>Remember Me for a month</span>
                                                                        <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor" style={{ fontWeight: 'bold' }}>Sign Up here</Link></p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 mx-auto">
                                                                <label className="mb-0">
                                                                    <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit" onClick={CandidateLogin}>Login</button>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                                <TabPanel>
                                                    <form id="login_form" className="login_form wrap-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-email"></i>
                                                                    <input value={companyemail} onChange={(e) => {
                                                                        setcompanyemail(e.target.value)
                                                                    }} type="email" id="txtemail" placeholder="Email Address" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-lock"></i>
                                                                    <input value={companypass} onChange={(e) => {
                                                                        setcompanypass(e.target.value)
                                                                    }} type="password" id="password" placeholder="Password" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <label>
                                                                    <div className="forgot-pwd text-center mt-5">
                                                                        <p onClick={handleOpen}>Forgot Password</p>
                                                                        <Modal
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                        >
                                                                            <Box sx={style}>
                                                                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                                                                    Reset Password</Typography>
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="email"
                                                                                    label="Email"
                                                                                    style={{ width: '80%', marginTop: '10%' }}
                                                                                    required
                                                                                // value={fields.email}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="pass"
                                                                                    label="New Password"
                                                                                    style={{ width: '80%' }}
                                                                                    required
                                                                                // value={fields.password}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <TextField
                                                                                    margin="dense"
                                                                                    variant="outlined"
                                                                                    name="passcheck"
                                                                                    label="Confirm Password"
                                                                                    style={{ width: '80%' }}
                                                                                    required
                                                                                // value={fields.confirmPassword}
                                                                                // onChange={handleFieldChange}
                                                                                />
                                                                                <div className="justify-center mt-2">
                                                                                    <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" onClick={handleClose}>Submit</button>
                                                                                </div>
                                                                            </Box>
                                                                        </Modal>
                                                                        <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                        <span>Remember me for a month</span>
                                                                        <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor " style={{ fontWeight: 'bold' }}>Sign Up here</Link></p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 mx-auto">
                                                                <label className="mb-0">
                                                                    <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                                        type="submit" onClick={EmployerLogin}>Login</button>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                    <div className="login-social-buttons">
                                        <div className="row">
                                            
                                            <div className="col-lg-6 flex">
                                                <button id="login-with-facebook" className="social-account-button facebook-button ml-100 ml=5"
                                                >
                                                    <FacebookLogin
                                                        appId="951777148793990"
                                                        autoLoad={false}
                                                        fields="name,email,picture"
                                                        callback={responseFacebook}
                                                        cssClass=""
                                                        icon="fa-facebook"
                                                    />
                                                </button>
                                            </div>
                                            <div className="col-lg-6 flex">
                                                <button id="login-with-google" className="mt-25 ml-10 google-button">
                                                    <GoogleLogin method="POST"
                                                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"

                                                        onSuccess={responseGoogle}
                                                        onFailure={responseGoogle}
                                                        cookiePolicy={'single_host_origin'}
                                                        isSignedIn={true}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login end */}


            <Footer />

        </div>
    );
}
export default Login;