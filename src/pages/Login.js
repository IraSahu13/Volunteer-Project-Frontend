import React, { Component, useState } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { login } from '../api';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const Login = () => {

    const [useremail, setuseremail] = useState("");
    const [userpass, setuserpass] = useState("");

    const [companyemail, setcompanyemail] = useState("");
    const [companypass, setcompanypass] = useState("");

    const [candidateOn, setCandidateOn] = useState(false);
    const [employerOn, setEmployerOn] = useState(false);
    
    const history = useHistory();

    const CandidateLogin = async (e) => {
        if (useremail !== "") {
                e.preventDefault();
                setCandidateOn(true);
                e.preventDefault();
                Promise.resolve(login({ email: useremail, password: userpass, status: "user" })).then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("status", res.data.status);
                    history.push('/');
                    // window.location.reload();
                }).catch((e) => {
                    console.log(e.response);
                    setInterval(() => {

                    }, 5000);
                })
            }
        }
        const EmployerLogin = async (e) => {
            if (companyemail === "") {
                return;
            }
            e.preventDefault();
            Promise.resolve(login({ email: companyemail, password: companypass, status: "company" })).then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("status", res.data.status);
                history.push('/');
                // window.location.reload();
            }).catch((e) => {
                console.log(e.response);
                setInterval(() => {

                }, 5000);
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
                <PageHeader
                    title="Login"
                    breadcrumb="Login"
                />
                {/* PageHeader end */}


                {/* login */}
                <div className="ttm-row login-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="text-center mb-20">
                                            <h3>Login To Your Account</h3>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <TabList className="tabs">
                                                    <Tab className="tab">
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
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input value={useremail} onChange={(e) => {
                                                                            setuseremail(e.target.value)
                                                                        }} type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
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
                                                                            <p><a href="#" className="text-theme-SkinColor">Forgot Password?</a></p>
                                                                            <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                            <span>Remember Me for a month</span>
                                                                            <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor">Sign Up here</Link></p>
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
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input value={companyemail} onChange={(e) => {
                                                                            setcompanyemail(e.target.value)
                                                                        }} type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
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
                                                                            <p><a href="#" className="text-theme-SkinColor">Forgot Password?</a></p>
                                                                            <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                            <span>Remember me for a month</span>
                                                                            <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor">Sign Up here</Link></p>
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
                                                <div className="col-md-6">
                                                    <button id="login-with-facebook" className="social-account-button w-100 facebook-button"

                                                    >
                                                        <FacebookLogin
                                                            appId="951777148793990"
                                                            autoLoad={true}
                                                            fields="name,email,picture"
                                                            callback={responseFacebook}
                                                            cssClass=""
                                                            icon="fa-facebook"
                                                        />
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button id="login-with-google" className="social-account-button w-100 google-button">
                                                        <GoogleLogin method="POST"
                                                            clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"

                                                            onSuccess={responseGoogle}
                                                            onFailure={responseGoogle}
                                                            cookiePolicy={'single_host_origin'}
                                                            isSignedIn={true}
                                                        />,
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