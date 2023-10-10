import React from 'react'
import CarCard from './CarCard'

export default function PopularCars(props) {

    const carData = props.carData;
  return (
    <>
        <div className="container-fluid popular-cars p-5">
            <div className="d-flex justify-content-between p-3 pt-0">
                <div className="heading">
                    <p>Populat Cars</p>
                </div>
                <div className="action-btn">
                    <p className='float-end'>View All</p>
                </div>
            </div>
            <div className="row popular-cars-list">
                {carData.map((carData, index) => (
                    <div key={index} className="col-lg-3 col-md-5 col-sm-3">
                        <CarCard carData={carData} />
                    </div>
                ))}
                {/* <div className="col-lg-3 col-md-5 col-sm-3">
                    <CarCard carData={carData}/>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-3">
                    <CarCard />
                </div>
                <div className="col-lg-3 col-md-5 col-sm-3">
                    <CarCard />
                </div>
                <div className="col-lg-3 col-md-5 col-sm-3">
                    <CarCard />
                </div> */}
            </div>
        </div>
    </>
  )
}
