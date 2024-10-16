import React from 'react'
import { Link } from 'react-router-dom'

const SubscribeSection = () => {
  return (
    <div className="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-heading">
                        <h2>Get 30% Off when you subscribe to our newsletter</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
                        
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div className="row">
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-2">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Store Location:<br/><span>Parliamentary Extension, 52011, Calabar</span></li>
                                <li>Phone:<br/><span>010-020-0340</span></li>
                                <li>Office Location:<br/><span>Goshen City</span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br/><span>admin@estherrex.com</span></li>
                                <li>Social Media:<br/><span><Link to="">Facebook</Link>, <Link to="">Instagram</Link>, <Link to="">Behance</Link>, <Link to="">Linkedin</Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeSection