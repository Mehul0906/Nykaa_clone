import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import { FaBagShopping } from "react-icons/fa6";
import image from "../Images/Sale.png"
import Login from './Login';
import { ContextApi } from '../contextApi/AllContexts';
const Navbar = () => {
    const {showLogin, setShowLogin} = useContext(ContextApi)
    
    return (
        <>
            <div className="container-fluid p-0">
                <div className="container-fluid Navbar-first-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-5 text">
                                        <p className='ps-5'>Nykaa's Hot Pink Sale Is Live!</p>
                                    </div>
                                    <div className="col-7">
                                        <ul className='d-flex justify-content-evenly list-unstyled'>
                                            <li className='Navbar-zero-text'><NavLink style={{ color: "black", fontWeight: "500" }} to='*' ><i class="fa-solid fa-mobile" style={{ padding: "5px" }}></i>Get App</NavLink></li>
                                            <li className='Navbar-zero-text'><NavLink style={{ color: "black", fontWeight: "500" }} to='*' ><i class="fa-solid fa-location-dot" style={{ padding: "5px" }}></i>Store & Events</NavLink></li>
                                            <li className='Navbar-zero-text'><NavLink style={{ color: "black", fontWeight: "500" }} to='*' ><i class="fa-solid fa-gift" style={{ padding: "5px" }}></i>Gift Card</NavLink></li>
                                            <li className='Navbar-zero-text'><NavLink style={{ color: "black", fontWeight: "500" }} to='*' ><i class="fa-solid fa-circle-question" style={{ padding: "5px" }}></i>Help</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid Navbar-second-div'>
                <div className="container">
                    <div className="row">
                        <div className='col-1'>
                            <div style={{ height: "100%", width: "100%", marginLeft: "40px" }}>
                                <NavLink>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Nykaa_New_Logo.svg" style={{ height: "65px", width: "100px" }} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-5 ps-5'>
                            <ul className='d-flex justify-content-between list-unstyled' style={{ lineHeight: "70px", fontWeight: "600", color: "black" }}>
                                <li className='Navbar-first-text'><NavLink>Categories</NavLink>
                                </li>
                                <li className='Navbar-first-text'><NavLink>Brands</NavLink></li>
                                <li className='Navbar-first-text'><NavLink>Luxe</NavLink></li>
                                <li className='Navbar-first-text'><NavLink>Nykaa Fashion</NavLink></li>
                                <li className='Navbar-first-text'><NavLink>Beauty Advice</NavLink></li>
                            </ul>
                        </div>
                        <div className='col-2 d-flex mt-4 ms-5 w-25 search'>
                            <div className='search-icon'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='ps-3'>
                                <input type="text" placeholder='Search on Nykaa' className='search-box' />
                            </div>
                        </div>
                        <div className='col-2 d-flex'>
                            <div className='w-50'>
                                <Link><button className='Navbar-btn' onClick={()=>setShowLogin(!showLogin)}>Sign in</button></Link>
                                    {showLogin? <Login /> : ""}
                            </div>
                            <div className='mt-4'>
                                <Link><FaBagShopping style={{ marginLeft: "60%", marginTop: "8px" }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ border: "1px solid grey", width: "100%" }}></div>
            <div>
                <div className='container-fluid Navbar-third-div position-static'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 mt-3'>
                                <ul className=' d-flex justify-content-between list-unstyled' style={{ fontWeight: "400", color: "black", fontWeight: "500" }}>
                                    <li className='Navbar-text'><Link to={"/Product"}>Makeup</Link></li>
                                    <li className='Navbar-text'><NavLink>Skin</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Hair</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Appliances</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Bath & Body</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Natural</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Mom & Baby</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Health & Wellness</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Men</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Fragrance</NavLink></li>
                                    <li className='Navbar-text'><NavLink>Lingerie & Accessories</NavLink></li>
                                    <li><NavLink><img src={image} alt="" /></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar