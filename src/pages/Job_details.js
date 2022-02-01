import React, { Component, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { getIntern } from '../api';


const Job_details = () => {

    const [intern, setIntern] = useState([]);
    const [company, setCompany] = useState([]);
    useEffect(() => {
        const url = localStorage.getItem("url")
        Promise.resolve(getIntern(url)).then((res) => {
            console.log(res);
            setIntern(res.data.intern)
            setCompany(res.data.company)
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    {
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,

            responsive: [{

                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };

        return (

            <div className="site-main">
                <Header />

                {/* PageHeader */}
                <PageHeader
                    title="job details"
                    breadcrumb="job"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget">
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>Job Informations</h3>
                                        <ul>
                                            <li className="d-flex"><b className="mr-5">Job Type:</b>{intern.jobType}</li>
                                            <li className="d-flex"><b className="mr-5">Location:</b>{intern.location}</li>
                                            <li className="d-flex"><b className="mr-5">Offered Salary:</b>{intern.stipend}</li>
                                            <li className="d-flex"><b className="mr-5">Posted on:</b> {intern.createdAt?.substr(0, 10)}</li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b>{intern.experienceNeeded}</li>
                                            <li className="d-flex"><b className="mr-5">Category:</b>{intern.category}</li>
                                            <li className="d-flex"><b className="mr-5">Qualification:</b>{intern.qualificationNeeded}</li>
                                            <li className="d-flex"><b className="mr-5">position:</b>{intern.position}</li>
                                            <li className="d-flex"><b className="mr-5">no. of candidates hired:</b>{intern.users?.length}</li>
                                        </ul>
                                    </aside>
                                    <aside className="widget form-widget">
                                        <h3 className="widget-title"><i className="ti ti-email"></i>Send Us Message</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Your Name" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Your Email" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="3" placeholder="Message" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </aside>
                                    <aside className="widget location-widget p-0">
                                        <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1578680778274!5m2!1sen!2sin">
                                        </iframe>
                                        <div className="p-20">
                                            <div>
                                                <span className="text-theme-SkinColor">
                                                    <i className="fa fa-map-marker-alt mr-10"></i></span>24 Fifth st, Los Angeles, USA
                                            </div>
                                            <div>
                                                <a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@example.com</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor m-0">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link a='/job_details'>{intern.name}</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published on {intern.createdAt?.substr(0, 10)}</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>{company?.city}</span>
                                                        <span><i className="fa fa-filter"></i>{company?.name}</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">{intern.jobType}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Job Description :</h5>
                                            </div>
                                            <div className="desc">
                                                {(intern.description) ? <p>{intern.description}</p> : <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis. ”</p>}
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Required Knowledge, Skills, and Abilities :</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    {(intern.qualificationNeeded?.length===0 && <p>No Prerequisites Reuired</p>)}
                                                    {intern.qualificationNeeded?.map((data) => (
                                                        <li>
                                                            <i className="ti ti-check-box"></i>
                                                            <div className="ttm-list-li-content">{data}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Skills Required</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                {(intern.skillsNeeded?.length===0 && <p>No Prerequisites Reuired</p>)}
                                                    {intern.skillsNeeded?.map((data) => (
                                                        <li>
                                                            <i className="ti ti-check-box"></i>
                                                            <div className="ttm-list-li-content">{data}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="justify-center mt-20 mb-60">
                                            <div className="col-lg-12">
                                                <label className="mb-0">
                                                    <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                    ><a href={'/apply'}>Apply</a></button>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5>Related Jobs :</h5>
                                    </div>
                                </div>
                                <Slider className="row slick_slider slick-arrows-style2 mb_15" {...slick_slider} vertical={true} slidesToShow={1} rows={2} arrows={true}>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Vacancy For the Human Resource</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="blue">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                                <div className="required-tag">Urgent</div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Vacancy For the Business Analyst</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="danger-color">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Opening For Social Media Manager </Link> </h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="deep-orange">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'><a href={'/job_details'}>Opening For The Content Creator</a></Link> </h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                </Slider>{/* row end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>


                {/* action-section */}
                <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-md-flex align-items-center justify-content-between">
                                    {/* featured-icon-box */}
                                    <div className="featured-icon-box icon-align-before-content style2">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                                <i className="flaticon flaticon-recruitment-5"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Incredible Recruitment & Staffing Agency</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>We have over 30 years experience oft Business porro qusquam dol ipsum quia dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>{/* featured-icon-box end */}
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                                        href={process.env.PUBLIC_URL + '/'}>Hiring Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* action-section end */}


                <Footer />

            </div>
        )
    }
}

export default Job_details;