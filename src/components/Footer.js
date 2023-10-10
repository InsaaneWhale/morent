import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='container-fluid popular-cars p-5'>
            <div className="border-bottom">
                <div className="d-flex footer-content justify-content-between mb-4">
                    <div className="left-part">
                        <h1 className="logo text-primary my-auto">MORENT</h1>
                        <div>Our vision is to provide convenience and help increase your sales business.</div>
                    </div>
                    <div className="right-part row justify-content-between">
                        <div className="about col-lg-4 ">
                            <h4>About</h4>
                            <ul>
                                <li>How it works</li>
                                <li>Featured</li>
                                <li>Partnership</li>
                                <li>Business Relation</li>
                            </ul>
                        </div>
                        <div className="community col-lg-4 ">
                            <h4>Community</h4>
                            <ul>
                                <li>Events</li>
                                <li>Blog</li>
                                <li>Podcast</li>
                                <li>Invite a friend</li>
                            </ul>
                        </div>
                        <div className="socials col-lg-4 ">
                            <h4>Socials</h4>
                            <ul>
                                <li>Discord</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-part row justify-content-between mt-4">
                <div className="col-lg-6 col-sm-12 crights fw-bold">
                    &copy;2022 MORENT, All rights reserved
                </div>
                <div className="col-lg-6 col-sm-12 terms">
                    <div className="d-flex justify-content-end">
                        <p className='mx-5 fw-bold'>Privacy Policy</p>
                        <p className='fw-bold'>Terms & Condition</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
