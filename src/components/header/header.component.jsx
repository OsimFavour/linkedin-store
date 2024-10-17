import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg' 

const Header = () => {
  return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                    
                        <Link to="index.html" className="logo text-dark">
                           <LinkedInLogo />
                            
                        </Link>
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                            <li className="scroll-to-section"><Link to="/shop">Shop</Link></li>
                            <li className="scroll-to-section"><Link to="/sign-in">Sign In</Link></li>
                           
                            
                            <li className="scroll-to-section"><Link to="/cart">Cart Symb</Link></li>
                            
                        </ul>  
                             
                        <Link className='menu-trigger'>
                            <span>Menu</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header