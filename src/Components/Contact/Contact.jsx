import React from "react";

export default function Contact() {
  return (
    <>
     
     <h1 className=" text-uppercase text-center mb-5">conatct section</h1>
     
      <div className="  text-center d-flex justify-content-center">
       
   
<div className="d-flex flex-column gap-5 mt-4 w-50 align-items-center ">
<input className="w-100 form-control " type="text" placeholder="userName" />
<input  className="w-100 form-control" type="text" placeholder="userAge" />
<input className="w-100 form-control" type="text" placeholder="userEmail" />
<input className="w-100 form-control" type="text" placeholder="userPassword" />
<button className="  bg-second align-self-start rounded-2  ">Send Message</button>
</div>

      </div>
    

    </>
  );
}
