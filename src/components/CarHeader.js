import React from 'react'

export default function CarHeader() {
    const carCardLeft = {
      backgroundImage: `url(${'/images/bg1.png'})`,
      backgroundSize: 'cover',
    };

    const carCardRight = {
        backgroundImage: `url(${'/images/bg2.png'})`,
        backgroundSize: 'cover',
      };

  return (
    <>
        <div className="container-fluid p-5 pb-0">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                    <div className="card border-0">
                        <div className="card-body main-car-card text-white p-4" style={carCardLeft}>
                            <h4>The Best Platform for Car Rental</h4>
                            <p className='mt-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                            <button className='btn btn-primary btn-car btn-lg mt-2'>Rental Car</button>
                            <img src="images/car1.png" alt="Car 1" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id='cardiv2'>
                    <div className="card border-0">
                        <div className="card-body main-car-card text-white p-4" style={carCardRight}>
                            <h4>Easy way to rent a car at a low price</h4>
                            <p className='mt-4'>Providing cheap car rental servies and safe and comfortable facilities.</p>
                            <button className='btn btn-primary btn-car btn-lg mt-2'>Rental Car</button>
                            <img src="images/car2.png" alt="Car 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
