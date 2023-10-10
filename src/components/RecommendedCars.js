import React from 'react'
import CarCard from './CarCard'

export default function RecommendedCars(props) {

    const carData = props.carData;
  return (
    <>
        <div className="container-fluid recommended-cars p-5">
            <div className="heading  p-3 pt-0">
                <p>Recommended Cars</p>
            </div>
            <div className="row recommended-cars-list justify-content-center">
                {carData.map((carData, index) => (
                    <div key={index} className="col-lg-3 col-md-5 col-sm-3 mb-3">
                        <CarCard carData={carData}/>
                    </div>
                ))}
            </div>
            <div className="recommended-cars-footer d-flex mt-3 align-items-center justify-content-center">
                <button className='btn btn-primary  btn-lg'>Show more car</button>
                <span>120 Car</span>
            </div>
        </div>
    </>
  )
}
