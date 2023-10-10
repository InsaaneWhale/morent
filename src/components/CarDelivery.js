import React from 'react'

export default function CarDelivery() {
  return (
    <div className="container-fluid p-5 pb-0">
        <div className="appointments row justify-content-between">
            <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="card border-0">
                    <div className="card-body rounded">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioPickUp" id="flexRadioPickUp"/>
                            <label className="form-check-label fw-bold" htmlFor="flexRadioPickUp">
                                Pick - Up
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div className="col1">
                                <label htmlFor="" className='fw-bold'>Locations</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your city</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col2">
                                <label htmlFor="" className='fw-bold'>Date</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your date</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col3">
                                <label htmlFor="" className='fw-bold'>Time</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your time</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box col-lg-2 col-md-2 col-sm-12 d-flex align-items-center justify-content-center">
                <div className="box-sort">
                    <i className="fa-solid fa-arrow-up-long"></i>  
                    <i className="fa-solid fa-arrow-down-long"></i>  
                </div>
            </div>
            <div className="mw-550  col-lg-5 col-md-5 col-sm-12">
                <div className="card border-0">
                    <div className="card-body rounded">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDropOff" id="flexRadioDropOff"/>
                            <label className="form-check-label fw-bold" htmlFor="flexRadioDropOff">
                                Drop - Off
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div className="col1">
                                <label htmlFor="" className='fw-bold'>Locations</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your city</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col2">
                                <label htmlFor="" className='fw-bold'>Date</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your date</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col3">
                                <label htmlFor="" className='fw-bold'>Time</label>
                                <select className="form-select border-0 fw-light" >
                                    <option  >Select your time</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
