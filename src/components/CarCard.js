import React from 'react';

export default function CarCard(props) {
  const carData = props.carData; 
  if (!carData) {
    return <div>No car data provided</div>;
  }

  return (
    <>
      <div className="card car-details border-0">
        <div className="card-body pb-4 max-height-car-cards">
          <div className="d-flex justify-content-between align-items-center">
            <div className="car-name">{carData.name}</div>
            <div className="favourite">
                <i className={`fa-solid fa-heart ${carData.liked ? 'pink' : 'default'}`}></i>
            </div>
          </div>
          <div className="car-type">{carData.type}</div>
          <div className="d-flex flex-column car-img-details">
            <div className="car-pic">
              <div className="gradient"></div>
              <img src={carData.image} alt={carData.name} />
            </div>
            <div className="d-flex justify-content-between align-items-center car-specs">
              <div className="gas">
                <i className="fa-solid fa-gas-pump"></i>&nbsp;&nbsp;{carData.gas}
              </div>
              <div className="transmission">
                <i className="fa-solid fa-circle-radiation"></i>&nbsp;&nbsp;{carData.transmission}
              </div>
              <div className="capacity">
                <i className="fa-solid fa-user-group"></i>&nbsp;&nbsp;{carData.capacity}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 mb-0">
            <div className="price">
              ${carData.price.toFixed(2)} /
              <span>day</span>
              <span className='discount'>
              {carData.discount && carData.discount > 0 ? ( 
              <div className="discount">
                ${carData.discount.toFixed(2)}
              </div>
            ) : null}
              </span>
            </div>
            <button className="btn btn-primary ">Rent Now</button>
          </div>
        </div>
      </div>
    </>
  );
}


CarCard.defaultProps = {
    carData: {
      name: 'Null',
      type: 'Null',
      image: 'default-image.png',
      gas: '0L',
      transmission: 'Null',
      capacity: '0 People',
      price: 0.00,
    },
  };