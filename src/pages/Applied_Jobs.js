import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { allApplicants, companyInterns } from '../api';
import { Footer } from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageHeader from '../components/layout/PageHeader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Applied_Jobs = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [AllApplications, setallInterns] = useState([]);
    useEffect(() => {
        Promise.resolve(companyInterns()).then((res) => {
            console.log(res.data.intern);
            setallInterns(res.data.intern)
        }).catch((e) => {
            console.log({ e });
        })
    }, []);

    return (
        <div>
            <Header />
            <PageHeader
                title="Applications"
                breadcrumb="applications"
            />
            <Card>
                <div className="row m-4">
                    {AllApplications?.map((data)=>(
                        <div className="col-lg-12">
                        
                    </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ece3f4' }}>
                            {/* <div className="featured-thumbnail">
                <img src="https://via.placeholder.com/200x200?text=200x200+candidate-04.jpg" />
            </div> */}
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h3>JOB-2</h3>
                                </div>
                                <div className="featured-bottom">
                                    <div className="job-skill">
                                        <p style={{color: 'grey'}}>10-01-22</p>
                                    </div>

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
                                            exact to={'/application'} >Review Application</Link>
                                            <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                           ttm-btn-color-dark mr-20"
                                            exact to={'/job_details'}>View Job</Link>
                                            <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                           ttm-btn-color-dark"
                                            exact to={'/application'}>View Progress</Link>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {allcandidates.map((user) => (
            <div className="col-lg-12">
                <div className="featured-imagebox featured-imagebox-candidate" style={{backgroundColor:'#ece3f4'}}>
                    <div className="featured-thumbnail">
                        <img src="https://via.placeholder.com/200x200?text=200x200+candidate-04.jpg" />
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>{user.name}</h3>
                        </div>
                        <div className="featured-bottom">
                            <div className="job-skill">
                                {user.skills.map(skill => (
                                    <span className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="job-meta">
                                <span><i className="fa fa-map-marker-alt"></i>{user.city}</span>
                            </div>
                            <div className="view-block">
                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                ttm-btn-color-dark"
                                    href={'/applications'}>view Applications</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))} */}
                </div>
            </Card>
            <Footer />
        </div>);
};

export default Applied_Jobs;
