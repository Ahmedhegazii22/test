import React from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="row g-3">
          <h1 className=" text-uppercase text-center fw-bolder">
            portfolio component
          </h1>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
              className="parent "
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img1} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              className=" parent"
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img2} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
              className=" parent"
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img3} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
              className="parent "
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img1} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal5"
              className=" parent"
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img2} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal6"
              className="parent "
            >
              <div className="layer d-flex justify-content-center align-items-center">
                <span>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </span>
              </div>
              <img className="rounded-3 w-100" src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal4"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal5"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal6"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
