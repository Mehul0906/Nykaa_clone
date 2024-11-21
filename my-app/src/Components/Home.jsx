import React, { useEffect, useState } from 'react'
// Slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// HOME CSS
import '../styles/Home.css';
// Slider Import
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom'
import pic from "../Images/Lighting.jpg"
import axios from 'axios';
const Home = () => {
    const [FirstData,setFirstData]=useState([])

    const getdata=()=>{
        axios.get("http://localhost:3000/productSlider1")
        .then((res)=>setFirstData(res.data))
        .catch((err)=>console.log(err))
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    var settings1 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    var settings3 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    var settings4 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
    };
    return (
        <>
            {/* First Home Page Banner*/}
            <div className='Home-First-div'>
                <div className='col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/cc9006f0-862b-459f-9304-9ec07b1f74f5.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                </div>
            </div>
            {/* Second Home Page Slider*/}
            <div className='container-fluid Home-Second-div'>
                <div className='container-fluid' style={{ width: "90%" }}>
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/df06a0c9-ef63-40e6-b685-72a599dd514e.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/cca2a63e-ac9b-41fd-ac70-94d73935e81a.jpg?tr=cm-pad_resize,w-200 " alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b1af0e96-72d3-4687-ac7f-d564f8e2df09.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a63ab438-4242-4bfa-947f-586301c5d37a.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a873398e-39a8-4e8c-8c2b-d201a42eadbd.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/92519331-cc23-41a2-897b-05d35ccdef70.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/74728060-b5b8-4c47-b5c9-e6bf08a08661.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/5fd0d8b6-18dc-45cc-8aaf-27e9b5f438a6.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a2e3ae64-c452-4ad7-96c3-c63466e2f5a8.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/9c823e15-c913-4115-8c78-65e63e15cd5d.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/cc6fa1a0-6a15-46f3-9237-b6294108be4c.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/bc9c9d05-1d28-47fc-8cf8-a46f405e0e78.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/6fcd1534-2a58-42dc-b6fb-02cdba58e8ba.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Third Home Page Banner Lightning*/}
            <div className='container-fluid Home-Third-div'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10'>
                            <img src={pic} alt="" style={{ height: "px" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fourth Home Page Banner GIF*/}
            <div className='container-fluid Home-Fourth-div'>
                <div className="container-fluid d-flex">
                    <div className="row ms-5">
                        <div className='col-3' style={{ width: "33.33" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b1a7d358-2ddd-4222-bb0f-0d6535633cb8.gif" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-3' style={{ width: "33.33" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/40c1956e-60c5-403d-89a3-1f572f663df2.gif" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-3' style={{ width: "33.33" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/2ecd4203-9423-4939-b9cd-917da87fc789.gif" alt="" /></NavLink></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fifth Home Page img 3 Slider*/}
            <div className='container-fluid Home-Fifthy-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings1}>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/ae0d385c-0797-4f2d-9912-58c56d137b35.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/a6de4ec6-02dd-457d-9f9a-44d30dd72558/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/bddbe88b-5135-46c7-96f4-3c416c8e4168/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/813a0c61-9f07-41bf-9df1-576e6d90ad80/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/cf553085-2820-4ce9-a1df-6e2145a938e2/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/a93cc43c-06f0-4d9c-8cae-8f4366c6ee33/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/creatives/48fc5368-4922-47cd-acab-ce5863f8add6/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></Link></h3>
                                </div>
                                <div>
                                    <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/d61366f9-b348-4e93-96e7-8e7aa933cbe0.gif" alt="" style={{ borderRadius: "10px", padding: "10px" }} /></Link></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sixth Home Page Banner Lips day*/}
            <div className='Home-Sixth-div'>
                <h4 style={{ marginLeft: "5%" }}>Brand In Focus</h4>
                <div className=' container-fluid col-11'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/3925410d-8e70-4018-8642-49e5ef92f885.png?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%", borderRadius: "10px" }} /></NavLink>
                </div>
            </div>
            {/* Seven Home Page Cover 5 img*/}
            <div className='container-fluid Home-Seven-div mt-5'>
                <div className="container-fluid d-flex">
                    <div className="row ">
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/efbddb67-700e-44f2-9161-11cc4ccb10d9.png?tr=cm-pad_resize,w-300" alt="" /></Link></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/80d635fe-6a05-4b51-be15-146c68e7b30a.png?tr=cm-pad_resize,w-300" alt="" /></Link></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/a6a3bf71-46d8-401a-8312-ccfe4fd88c87.png?tr=cm-pad_resize,w-300" alt="" /></Link></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/f0e11d7d-d107-4135-a0ed-1870ecca58bf.png?tr=cm-pad_resize,w-300" alt="" /></Link></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><Link to={"/Product"}><img src="https://images-static.nykaa.com/uploads/b61af84d-4fe5-488a-8a0b-a3765d9edaf3.png?tr=cm-pad_resize,w-300" alt="" /></Link></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Eight Home Page 3 img slider*/}
            <div className='container-fluid Home-Elight-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings2}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/creatives/6c90b913-ef11-456b-b7ea-72df2a0085bd/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/creatives/b806a8b4-305f-4269-bacc-d59aea8930a2/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/creatives/5cd692f6-4464-4926-93f7-d49fec3a9858/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/creatives/491deec8-f5f7-4591-83b4-4fc8a6a4374b/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/creatives/d5b05b43-c08d-4357-aac9-18f7d8bdc7c0/default.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nineth Home Page Banner luxury*/}
            <div className='Home-Nineth-div'>
                <div>
                    <div className='col-12'>
                        <NavLink><img src="https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                    </div>
                </div>
                <div className='col-11 m-auto'>
                    <Slider {...settings}>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/bf717669-4aa9-46a7-9966-04e9fb897279.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/313137e6-4a7b-4990-92ab-a5d845abf562.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/6dab596f-bea4-4e89-9753-bfd695c341e4.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/463b338f-b18b-412a-a2f6-4735b566f1f3.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/d0c0fb93-8e0c-4094-9eb7-1268d69e80d7.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/1abeccda-e5d8-4ce0-927d-6abb44977587.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/26f7a7ee-6611-4a95-a7ab-718ce5c8d545.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/e8df588d-2da8-41a4-9c20-57d893ed0e18.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/57626c17-03f8-447f-8811-3fd2ad5bf6cb.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                        <div>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a4e15880-1c7e-49f6-bd26-47e287056680.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                        </div>
                    </Slider>
                </div>
            </div>
            {/* tenth Home Page Banner Perfume img 3 slider */}
            <div className='container-fluid Home-tenth-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings3}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/05b1c9c4-4677-4a96-b227-0770b34733b1.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/05c176f9-fa25-493a-accc-a66d54c8b937.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/8bf652d4-4556-465c-b618-a16d303b4ef4.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/582289c8-d766-464f-adf8-e105ed1024d1.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/fe6a38e5-b80a-4db4-8bfe-1e04a3a205b0.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/8bf652d4-4556-465c-b618-a16d303b4ef4.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Eleven Home Page Banner Button*/}
            <div className='Home-Eleven-div'>
                <div className='col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/28690ee2-3f52-494d-9ca2-5a14b5251f16.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                </div>
            </div>
            {/* Twelve Home Page Banner Lips day*/}
            <div className='Home-Twelve-div'>
                <h4 style={{ marginLeft: "3.5%" }}>Find Your Perfect Match</h4>
                <div className=' container-fluid col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/f00522a9-3326-4d71-891d-d796f1b08b28.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "95%", borderRadius: "10px",margin:"auto" }} /></NavLink>
                </div>
            </div>
            {/*Thirteen Home Page Banner RADAR*/}
            <div className='Home-Thirteen-div'>
                <div className=' container-fluid col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/e13a0a13-6c99-4596-8a30-0f173a3b5c01.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "99%", borderRadius: "10px",margin:"auto" }} /></NavLink>
                </div>
            </div>
            {/* Fourteen Home Page OFFER IMG*/}
            <div className='container-fluid Home-Fourteen-div'>
                <div className="container-fluid d-flex">
                    <div className="row ms-5">
                        <div className='col-3' style={{ width: "25" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/47369159-8452-4b1d-ab68-fc95a5c49fa7/default.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                            <h5>Flat ₹899</h5>
                            <h6>Only For Today!</h6>
                        </div>
                        <div className='col-3' style={{ width: "25" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/4d567adf-dfd2-41c0-915f-b97825fc0ed1/default.png?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                            <h5>Buy 1 Get 1</h5>
                            <h6>Free On Glutathione</h6>
                        </div>
                        <div className='col-3' style={{ width: "25" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/7d47b4c2-b3f9-4aaa-930e-acf1ff3dd1ae/default.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                            <h5>2 Samples</h5>
                            <h6>on all orders!</h6>
                        </div>
                        <div className='col-3' style={{ width: "25" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/4fd14bf6-60a0-4194-8be4-75d2159f2895/default.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                            <h5>Up To 20% Off</h5>
                            <h6>On Entire Range</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fifteen Home Page Cover 5 img*/}
            <div className='container-fluid Home-Fifteen-div mt-5'>
                <div className="container-fluid d-flex">
                    <div className="row ">
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/2b1e6623-ce4e-47a1-b78e-bd5281892f42.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/99c176f4-40d6-47c1-b2da-b420d93c9b77.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/e23f650d-27f5-4def-8214-5b9999beb05c.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/f1c0c7d9-c1b4-484b-9371-5bdc0d78debf.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/33547f39-014e-4244-8d74-f3396b7d1b3b.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/*Sixteen Home Page Banner RADAR*/}
            <div className='Home-Sixteen-div'>
                <div className=' container-fluid col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/90d17dff-9729-42d8-b26e-4e9c8b28c2b5.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "99%", borderRadius: "10px",margin:"auto" }} /></NavLink>
                </div>
            </div>
            {/* Seventeen Home Page OFFER IMG*/}
            <div className='container-fluid Home-Seventeen-div'>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row ms-5">
                        <div className='col-4' style={{ width: "50%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/fd3bb004-5fec-47a4-ba7b-2cb969d602ad/default.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5>Buy 1 Get 1</h5>
                            <h6>On Glow Mix Collagen</h6>
                        </div>
                        <div className='col-4' style={{ width: "50%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/creatives/140e8a20-0c8b-4a0a-9d8d-0271bf89010b/default.png?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5>Si EDP Intense</h5>
                            <h6>OIntensity Redefined!</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* Eighteen Home Page Fetch Product Slider*/}
            <div className='container-fluid Home-Eighteen-div'>
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-12'>
                        {/* <Product /> */}
                    </div>
                </div>
            </div>
            </div>
            {/* Nineteen Home Page BANNER*/}
            <div className='Home-Nineteen-div' style={{marginTop:"4%"}}>
                <div className='col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/eef5181f-db0f-4f5a-9d00-0890923576c9.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                </div>
            </div>
            {/* Twenty Home Page Fetch Product Slider*/}
            <div className='container-fluid Home-Twenty-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings4}>
                            <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/2e50508c-0aa7-4cd9-8704-7059a0c6f0b5.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"28%"}}>BCAA</h5>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/9e42eca1-7ac8-4a3d-ac44-d89f9ff73eb8.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"22%"}}>Whey Protein</h5>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/bd8b4a7e-ce1b-4e50-b14a-99e6768bd0ce.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"35%"}}>ACV</h5>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/41a95ec4-d4d0-4455-905e-057d4a5bf0e0.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"28%"}}>Plant Protein</h5>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/40f5bd0a-04df-4789-8b07-65aefa2b1a9e.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"28%"}}>Weight Gain</h5>
                        </div>
                        <div className='col-2' style={{ width: "20%" }}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/32c98bf8-0a27-4002-acdf-e06fe1f9d81e.jpg?tr=cm-pad_resize,w-300" alt="" /></NavLink></h3>
                            <h5 style={{marginLeft:"28%"}}>Plant Protein</h5>
                        </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
           {/* Twentyone Home Page GET GIFTING*/}
            <div className='Home-Twentyone-div'>
                <div className=' container-fluid col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/3d20a60e-773d-4f46-802c-ffa1f5b16324.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "99%", borderRadius: "10px",margin:"auto" }} /></NavLink>
                </div>
            </div>
           {/* Twentytwo Home Page FLEX BANNER*/}
            <div className='container-fluid Home-Twentytwo-div'>
                <div className="container-fluid d-flex justify-content-around">
                    <div className="row">
                        <div className='col-6' style={{width:"50%"}}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=cm-pad_resize,w-600" alt="" style={{borderRadius:"10px",width:"100%",height:"120px"}} /></NavLink></h3>
                        </div>
                        <div className='col-6' style={{width:"50%"}}>
                            <h3><NavLink><img src="https://images-static.nykaa.com/uploads/97a082e3-76ba-4671-8a10-97c867ff5b2f.jpg?tr=cm-pad_resize,w-600" alt="" style={{borderRadius:"10px",width:"100%",height:"120px"}}  /></NavLink></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Twentythree Home Page Makeover Banner*/}
            <div className='Home-Twentythree-div mt-5'>
                <div className='col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/2bb0b9db-fd33-4a75-8daf-35794505a030.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                </div>
            </div>
            {/* Twentyfour Home Page Makeover Banner*/}
            <div className='container-fluid Home-Twentyfour-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings3}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/be4c6dcc-5474-4919-be2e-ea215e33b308.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/0d255a03-ae1f-405f-913f-97d79745cac4.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/3b029ea1-c467-48c3-a9d6-46eddf78f234.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/92a04fe7-e06d-458c-ba1e-031319a1679a.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/fef1433c-a149-4283-ad20-e1fe10870625.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Twentyfive Home Page Makeover Banner*/}
              <div className='Home-Twentyfive-div mt-5'>
                <div className='col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/1b69ee93-e58b-42f1-ae9e-086e72950c61.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "100%" }} /></NavLink>
                </div>
            </div>
            {/* Twentysix Home Page Makeover Banner*/}
            <div className='container-fluid Home-Twentysix-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings3}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/7e9469cf-e20e-46fa-a877-625e167bb3ef.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/783ade0e-d5c6-44d9-af0e-25eb3c0d605f.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/a260da2d-db12-43f3-b3f0-0d00bbe607a1.jpg?tr=cm-pad_resize,w-600" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            {/* TwentySeven Home Page Catagory slider*/}
            <div className='container-fluid Home-Second-div'>
                <div className='container-fluid' style={{ width: "90%" }}>
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/3e81ad59-c383-4821-b2dc-f6876c82d28c.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b560de6e-338e-490f-94aa-4d938fa11adc.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/9beb895e-e196-45b8-9110-b87a6535dace.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b8c1cc89-dbfe-4790-866f-a89787a7ab92.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b44b8f80-1672-4388-8509-814282b06b8f.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/b3ece4d0-5096-4bac-b013-0608271e8073.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/8936bd5b-af16-4162-98b3-7d75ad60b549.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/4143a4f1-8009-48bd-99ab-bf88a104e06e.jpg?tr=cm-pad_resize,w-200" alt="" /></NavLink></h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Twentyeight Home Page Offer Slider*/}
            <div className='container-fluid Home-Twentysix-div'>
                <div className='container-fluid' style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-12 p-5'>
                            <Slider {...settings4}>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/03dc1b15-cdef-4c18-a340-70034dbcfe59.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 70% off</h4>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/76da158d-2ada-47f7-ae2d-d6eaca5f590c.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 30% off</h4>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/0e297dae-2749-4520-aa21-74ceddf7c4aa.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 30% off</h4>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/8bb334eb-7b7b-4079-a7ee-a159db2d8b88.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 70% off</h4>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/d7803409-a6d3-4f4d-84f8-251db239de1b.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 70% off</h4>
                                </div>
                                <div>
                                    <h3><NavLink><img src="https://images-static.nykaa.com/uploads/64cc19c1-87bd-429d-a4b7-d6b934116588.jpg?tr=cm-pad_resize,w-300" alt="" style={{ borderRadius: "20px", padding: "10px" }} /></NavLink></h3>
                                    <h4 style={{marginLeft:"23%"}}>Up to 60% off</h4>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Twelve Home Page Banner Lips day*/}
            <div className='Home-Twelve-div'>
                <div className=' container-fluid col-12'>
                    <NavLink><img src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=cm-pad_resize,w-1200" alt="" style={{ width: "95%", borderRadius: "10px",margin:"auto" }} /></NavLink>
                    <h4 style={{ marginLeft: "2.5%",marginTop:"20px"}}>Find Your Perfect Match</h4>
                </div>
            </div>
        </>

    )
}

export default Home
