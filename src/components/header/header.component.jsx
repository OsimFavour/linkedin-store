import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectIsCartOpen } from '../../store/cart/cart.selector'

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg' 

const Header = () => {

    const isCartOpen = useSelector(selectIsCartOpen)
    console.log('Open Cart menu>>>', isCartOpen);
    

    return (
        <header className="header-area header-sticky background-header">
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
                            
                                
                                <li className="scroll-to-section">
                                    <Link>
                                        <CartIcon />
                                    </Link>
                                </li>
                                
                            </ul>  
                                
                            <Link className='menu-trigger'>
                                <span>Menu</span>
                            </Link>

                            {isCartOpen && <CartDropdown />}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header