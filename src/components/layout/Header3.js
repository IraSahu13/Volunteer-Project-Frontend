import React, { Component, useState } from 'react'
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import Header_search from './Header_search'
import { Link } from 'react-router-dom';
import { Avatar, Divider, IconButton, ListItemIcon, MenuItem, Tooltip, Menu } from '@material-ui/core';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import HeaderMenu from './HeaderMenu';

const Header = () => {

    const componentDidMount = () => {
        window.addEventListener('scroll', this.isSticky);
    }

    const componentWillUnmount = () => {
        window.removeEventListener('scroll', this.isSticky);
    }

    const isSticky = (e) => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
    };
    
    // const token = localStorage.getItem("token")
    const token = null;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (

            <header id="masthead" className="header ttm-header-style-03">
                {/* topbar */}
                <div className="top_bar bg-theme-GreyColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex">
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-phone-call"></i>
                                            </div>
                                            <span>(+01)123 456 789</span>
                                        </div>
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-email"></i>
                                            </div>
                                            <span><a href="mailto:info@example.com">info@example.com</a></span>
                                        </div>
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-placeholder"></i>
                                            </div>
                                            <span>Suite 20 Golden Street USA</span>
                                        </div>
                                    </div>
                                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span bg-theme-GreyColor pl-20 ms-auto">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-GreyColor"></div>
                                        <div className="layer-content">
                                            <div className="media-block">
                                                <ul className="social-icons">
                                                    <li>
                                                        <a className="facebook" href="/" rel="noopener" aria-label="facebook">
                                                            <i className="ti ti-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="twitter" href="/" rel="noopener" aria-label="twitter">
                                                            <i className="ti ti-twitter-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="google" href="/" rel="noopener" aria-label="google">
                                                            <i className="ti ti-google"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="linkedin" href="/" rel="noopener" aria-label="linkedin">
                                                            <i className="ti ti-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* topbar end */}
                {/* site-header-menu */}
                <div id="site-header-menu" className="site-header-menu border-top">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* site-navigation */}
                                    <div className="site-navigation d-flex align-items-center justify-content-between">
                                        {/* site-branding */}
                                        <div className="site-branding">
                                            <Logo />
                                        </div>
                                        {/* site-branding end */}
                                        <div className="border-box-block ms-auto mr-20">
                                            <div className=" d-flex align-items-center justify-content-between">
                                                {/* menu */}
                                                <HeaderMenu />
                                                <div className="mobile-menu"><Mobile_menu /></div>
                                                {/* menu end */}
                                            </div>
                                        </div>
                                        <div className="header_btn">
                                            {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border
                                            ttm-icon-btn-left ttm-btn-color-grey text-theme-DarkColor d-flex align-items-center"> */}
                                                {(!token) ?
                                                    <div className="view-block"  style={{padding: '0.75rem', backgroundColor: 'transparent', border: '1px solid currentColor'}}>
                                                        <i className="far fa-user fa-sm"></i><Link exact to={'/signup'}>Sign Up </Link>
                                                        <span className="ml-10 mr-10 alert-heading">/</span>
                                                        <i className="ti ti-lock fa-sm"></i><Link exact to={'/login'}>Login </Link>
                                                    </div> 
                                                    
                                                    : 
                                                    <React.Fragment>
                                                    <Tooltip title="Account settings">
                                                      <IconButton
                                                        onClick={handleClick}
                                                        size="small"
                                                        sx={{ ml: 2 }}
                                                        aria-controls={open ? 'account-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                      >
                                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                                      </IconButton>
                                                    </Tooltip>
                                                    <Menu
                                                      anchorEl={anchorEl}
                                                      id="account-menu"
                                                      open={open}
                                                      onClose={handleClose}
                                                      onClick={handleClose}
                                                      PaperProps={{
                                                        elevation: 0,
                                                        sx: {
                                                          overflow: 'visible',
                                                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                          mt: 1.5,
                                                          '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                          },
                                                          '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                          },
                                                        },
                                                      }}
                                                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                    >
                                                      <MenuItem>
                                                        <Avatar /> Profile
                                                      </MenuItem>
                                                      <MenuItem>
                                                        <Avatar /> My account
                                                      </MenuItem>
                                                      <Divider />
                                                      <MenuItem>
                                                        <ListItemIcon>
                                                          <PersonAdd fontSize="small" />
                                                        </ListItemIcon>
                                                        Add another account
                                                      </MenuItem>
                                                      <MenuItem>
                                                        <ListItemIcon>
                                                          <Settings fontSize="small" />
                                                        </ListItemIcon>
                                                        Settings
                                                      </MenuItem>
                                                      <MenuItem
                                                        onClick={()=>{
                                                           localStorage.removeItem("token");
                                                           localStorage.removeItem("status");
                                                           window.location.reload();
                                                           console.log("response");
                                                        }}>
                                                        <ListItemIcon>
                                                          <Logout fontSize="small"/>
                                                        </ListItemIcon>
                                                        Logout
                                                      </MenuItem>
                                                    </Menu>
                                                    {/* <i className="ti ti-lock fa-sm text-theme-DarkColor"></i><Link exact to={'/'} onClick={()=>{
                                                        localStorage.removeItem("token");
                                                        localStorage.removeItem("status");
                                                        window.location.reload();
                                                    }}>Sign Out </Link> */}
                                                    </React.Fragment>
                                                    }
                                            {/* </a> */}
                                        </div>
                                    </div>{/* site-navigation end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* site-header-menu end */}
                <div className="serach_bar bg-theme-SkinColor pt-20">
                    <div className="container">
                        <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
                            <div className="row row-equal-height ttm-boxes-spacing-20px">
                            <div className="col-md">
                                <label>
                                    <input type="text" id="keywords" placeholder="Keywords (e.g. Job Title)"/>
                                </label>
                            </div>
                            <div className="col-md">
                                <label>
                                    <input type="text" id="locations" placeholder="Locations (e.g. City, Counter)"/>
                                </label>
                            </div>
                            <div className="col-md">
                                <label>
                                    <input type="text" id="industry" placeholder="Industry (e.g. Design, Art)"/>
                                </label>
                            </div>
                            <div className="col-lg-2">
                                <label>
                                    <button className="submit ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-fill 
                                    ttm-btn-color-grey" type="submit">Search</button>
                                </label>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>

        )
    }


export default Header;