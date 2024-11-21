import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Pagination = () => {
  return (
    <>
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
    </>
  )
}

export default Pagination