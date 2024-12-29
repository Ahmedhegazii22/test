import React from "react";
import avatar from "../../assets/images/avataaars.svg";
export default function Start() {
  return (
    <>
      <div className=" bg-second min-vh-100 text-white">
        <div className="container text-center">
          <div className="row justify-content-center min-vh-100 align-items-center">
            <div className="col-md-6">
              <div>
                <img className="w-50" src={avatar} alt="" />

                <h1> Start Framework</h1>

                <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
