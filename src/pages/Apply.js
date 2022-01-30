import React from 'react';
import Header from '../components/layout/Header';
import PageHeader from '../components/layout/PageHeader';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Apply() {
  return (
     <>
        <Header /> 
        <PageHeader
            title="Apply Here"
            breadcrumb="application"
        />
        <div className="ttm-row login-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="mb-10">
                                            <h5>About</h5>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <div className="content-tab">                                
                                                    <TabPanel>
                                                        <form id="apply_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className=""></i>
                                                                        <input type="text" id="title_apply" placeholder="Title" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className=""></i>
                                                                        <input type="text" id="description" placeholder="Why you should get selected?"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                  <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                                                       <div className="featured-thumbnail">
                                                                         <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                                                       </div>
                                                                   <div className="featured-content">
                                                                     <div className="featured-title">
                                                                        <h3><a href={'/resume'}>Resume</a></h3>
                                                                     </div>
                                                                     <div className="featured-desc">
                                                                       <p>Review</p>
                                                                     </div>
                                                                     <div className="featured-bottom">
                                                                        {/* <div className="job-meta">
                                                                          <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                                          <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                                        </div> */}
                                                                        {/* <div className="job-time">
                                                                         <span className="blue">part time</span>
                                                                        </div> */}
                                                                       </div>
                                                                   </div>
                                                                  </div>
                                                                </div>
                                                                <div className="col-lg-6 mx-auto">
                                                                    <label className="mb-0">
                                                                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit" >Apply</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                    {/* <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" id="password" placeholder="Password"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <div className="forgot-pwd text-center mt-5">
                                                                            <p><a href="#" className="text-theme-SkinColor">Forgot Password?</a></p>
                                                                            <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                            <span>Remember Password</span>
                                                                            <p className="mt-3">Don't have account? <a href={'/signup'} className="text-theme-SkinColor">Sign Up here</a></p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 mx-auto">
                                                                    <label className="mb-0">
                                                                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                                                        type="submit" >Apply</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel> */}
                                                </div>       
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <Footer />
     </>
  );
}

export default Apply;
