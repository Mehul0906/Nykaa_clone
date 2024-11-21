import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";



function Product() {
  

const [data,setdata]=useState([])
// const [loading,setloading]=useState([false])
  const GetdataFromServer = () => {
  //  setloading(true)
    axios
      .get("http://localhost:3000/ProductData?_page=2&_limit=10")
      .then((res) => {
        setdata(res.data)
        // setloading(false)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
  
        GetdataFromServer();
  
  }, []);


  // loading ? <h1>Loading Wait.......</h1> :
  return  (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <h1
              style={{
                fontSize: "25px",
                color: "#50514F",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              All Products
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 col-3">
            <div>
              <hr />
            </div>
            <div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                  <b>Sort By : discount </b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Popularity</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Discount</span>
                    <br />
                    <input
                      type="checkbox"
                
                    />
                    <span>Customer top rated</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>New arrivals</span> <br />
                    <input
                      type="checkbox"
           
                    />
                    <span>Price: high to low</span> <br />
                    <input
                      type="checkbox"
                    />
                    <span>Price: low to high</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Price</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Rs. 0 - Rs. 499 6159</span> <br />
                    <input
                      type="checkbox"
                    />
                    <span>Rs. 500 - Rs. 999
                    2152</span>
                    <br />
                    <input
                      type="checkbox"           
                    />
                    <span>Rs. 1000 - Rs. 1999
                    1142</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Rs. 2000 - Rs. 3999
                    511</span> <br />
                    <input
                      type="checkbox"          
                    />
                    <span>Rs. 4000 & Above
227
</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Discount</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>20% and above
                    12</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>10% and above
                    37</span>
                    <br />
                    <input
                      type="checkbox"
                
                    />
                    <span>All discounted products
                    41</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Avg Customer Rating</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>4 stars & above
                    46</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>3 stars & above
                    46</span>
                    <br />
                    <input
                      type="checkbox"
                
                    />
                    <span>2 stars & above
                    46</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>1 star & above
                    46</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Gender</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Unisex
                    36</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Female
                    10</span>
                    <br />
                    <input
                      type="checkbox"
                
                    />
                    <span>Male
                    3</span> <br />
                </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Formulation</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Unisex
                    36</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Female
                    10</span>
                    <br />
                    <input
                      type="checkbox"
                
                    />
                    <span>Male
                    3</span> <br />
                </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Country Of Origin</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>India
                    42
                    </span> <br />
                </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Conscious</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Cruelty-Free
                    20</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Clean
                    2</span>
                    <br />
                </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* Ingredient */}
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    <b>Ingredient</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span>Shea Butter
                    5</span> <br />
                    <input
                      type="checkbox"
                    />
                    <span>Coconut
                    3</span>
                    <br />
                    <input
                      type="checkbox"           
                    />
                    <span>Aloe Vera
                    3</span> <br />
                    <input
                      type="checkbox"
                     
                    />
                    <span>Niacinamide
                    1</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            </div>
            <div>
              <hr />
            </div>
          </div>
          <div
            className="col-sm-7 me-sm-5 ms-sm-0 col-md-7 col-lg-7 col-xl-7 col-xxl-7 col-7"
            style={{ marginLeft: "35px" }}
          >
            <div className="product" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px"}}>
              {data.map((e) => (
                <div key={e.id}>
                  <Link
                    to={`/Description/${e.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className="border-1 card">
                      <div className="">
                      <span className="ps-5" style={{color:"rgb(232, 0, 113)"}}>FEATURED
                      </span> 
                      <span className="ps-3" style={{color:" #6dcff6"}}>NEW</span>
                      </div>
                      <div className="card-image" style={{margin:"auto"}}>
                        <img src={e.image_url} alt="" className="product-image-1" />
                      </div>
                      <Card.Body>
                        <Card.Text>
                          <button
                            style={{ backgroundColor: e.color }}        
                          ></button>
                          <div>
                          <p style={{ width: "300px", height: "44px",textAlign:"center"}}>
                            {e.product_name}
                          </p>
                          <p style={{width: "280px",height: "22px", textAlign:"center"}}>
                          MRP:{e.price}   
                          </p>
                          </div>
                          <p style={{textAlign:"center",color:"rgb(232, 0, 113)"}}>Enjoy Free Gift</p>
                        </Card.Text>
                        
                      </Card.Body>
                      <div className="d-flex">
                      <div className="w-25 ms-5">
                          <h3><FaRegHeart /></h3>
                      </div>
                      <div>
                        <button className="Product-btn">Add To Bag</button>
                      </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="pro-button mt-5">
            <div className="pagination d-flex justify-content-center">
              <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <h5><MdOutlineKeyboardArrowLeft  style={{textAlign:"center",width:"100%",marginTop:"9px"}}/></h5>
               </div>&nbsp;&nbsp;
               <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <p style={{textAlign:"center",width:"100%",marginTop:"8px"}}>1</p>
               </div>&nbsp;&nbsp;
               <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <p style={{textAlign:"center",width:"100%",marginTop:"8px"}}>2</p>
               </div>&nbsp;&nbsp;
               <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <p style={{textAlign:"center",width:"100%",marginTop:"8px"}}>3</p>
               </div>&nbsp;&nbsp;
               <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <p style={{textAlign:"center",width:"100%",marginTop:"8px"}}>4</p>
               </div>&nbsp;&nbsp;
               <div style={{height:"40px",width:"40px",borderRadius:"50px",backgroundColor:"aqua"}}>
               <h5><MdOutlineKeyboardArrowRight style={{textAlign:"center",width:"100%",marginTop:"9px"}} /></h5>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;