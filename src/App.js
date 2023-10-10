import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CarHeader from './components/CarHeader';
import CarDelivery from './components/CarDelivery';
import PopularCars from './components/PopularCars';
import RecommendedCars from './components/RecommendedCars';
import Footer from './components/Footer';

const popularCarData = [
  {
    name: 'Koenigsegg',
    type: 'Sport',
    image: 'images/car1.png',
    gas: '90L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 99.00,
    liked: true,
  },
  {
    name: 'Nissan GT-R',
    type: 'Sport',
    image: 'images/car2.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 80.00,
    discount: 100.00,
    liked: false,
  },
  {
    name: 'Rolls-Royce',
    type: 'Sedan',
    image: 'images/car3.png',
    gas: '70L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 96.00,
    liked: true,
  },
  {
    name: 'Nissan GT-R',
    type: 'Sport',
    image: 'images/car2.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 80.00,
    discount: 100.00,
    liked: false,
  },
];

const recommendedCarData = [
  {
    name: 'All New Rush',
    type: 'SUV',
    image: 'images/new/car8.png',
    gas: '70L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 72.00,
    discount: 80.00,
    liked: false,
  },
  {
    name: 'CR - V',
    type: 'SUV',
    image: 'images/new/car9.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    liked: true,
  },
  {
    name: 'All New Terios',
    type: 'SUV',
    image: 'images/new/car10.png',
    gas: '90L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 74.00,
    liked: false,
  },
  {
    name: 'CR - V',
    type: 'SUV',
    image: 'images/new/car11.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    liked: true,
  },
  {
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    image: 'images/new/car12.png',
    gas: '70L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 76.00,
    discount: 80.00,
    liked: true,
  },
  {
    name: 'New MG ZS',
    type: 'SUV',
    image: 'images/new/car13.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 80.00,
    liked: false,
  },
  {
    name: 'MG ZX Excite',
    type: 'Hatchback',
    image: 'images/new/car12.png',
    gas: '90L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 74.00,
    liked: true,
  },
  
  {
    name: 'New MG ZS',
    type: 'SUV',
    image: 'images/new/car13.png',
    gas: '80L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 80.00,
    liked: false,
  },
];

function App() {
  return (
    <>
      <Navbar/>
      <CarHeader/>
      <CarDelivery/>
      <PopularCars carData={popularCarData} />
      <RecommendedCars carData={recommendedCarData}/>
      <Footer />
    </>
  );
}

export default App;
