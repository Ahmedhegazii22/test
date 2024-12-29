import React from "react";

export default function Footer() {
  return (
    <>
     <footer className=" bg-main"> <div className="container text-center ">
        <div className="row">
          <div className="col-md-4">
            <div className="py-5 text-white">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="py-5 text-white">
              <h2>AROUND THE WEB</h2>
              <ul className="d-flex justify-content-center align-items-center g-4">
                <li className="p-2 mx-1 border border-white rounded-circle">
                  <i className="fa-brands fa-facebook mx-1 icon"></i>
                </li>
                <li className="p-2 mx-1 border border-white rounded-circle">
                  <i className="fa-brands fa-twitter  mx-1 icon"></i>
                </li>
                <li className="p-2 mx-1 border border-white rounded-circle">
                  <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                </li>
                <li className="p-2 mx-1 border border-white rounded-circle">
                  <i className="fa-brands fa-globe  mx-1 icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-white py-5">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="text-center text-white p-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div></footer>
    </>
  );
}
