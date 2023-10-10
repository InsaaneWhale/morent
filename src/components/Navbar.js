import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className="nav d-flex  align-items-center bg-white p-5 border-bottom">
            <h1 className="logo text-primary my-auto">MORENT</h1>
            
            <div className="nav-icons">
                <div className='icon-circle mx-2'><i className="fa-solid fa-heart"></i></div>
                <div className='icon-circle mx-2'>
                    <div className="noti-icon"></div>
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className='icon-circle mx-2'><i className="fa-solid fa-gear"></i></div>
            </div>
            
            <div className='icon-circle-img mx-2'><img src="images/profile.png" alt="Profile" /></div>
            <div className="nav-search input-group ms-5 h-50 w-25 my-auto ">
                <span className="input-group-text left bg-white rounded-left"><i className="fa-solid fa-search"></i></span>
                <input type="text" className="form-control " placeholder='Search something here'/>
                <span className="input-group-text right bg-white rounded-right"><i className="fa-solid fa-sliders"></i></span>
            </div>
        </nav>
    </>
  )
}
