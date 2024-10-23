import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectIsCartOpen } from '../../store/cart/cart.selector'

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg' 
import { setIsCartOpen } from '../../store/cart/cart.slice'

const Header = () => {
    const dispatch = useDispatch()

    const [ subMenuOpen, setSubMenuOpen ] = useState(false)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const isCartOpen = useSelector(selectIsCartOpen)
    console.log('Open Cart menu>>>', isCartOpen);
    
    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen);
        // dispatch(setIsCartOpen(!isCartOpen))
        // console.log('Dispatch Is Cart Open >>>', isCartOpen);
        
        
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen)
        
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setSubMenuOpen(false)
        dispatch(setIsCartOpen(false))
    }

    const handleLinkClick = (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    }

    return (
        <header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        
                            <Link className="logo text-dark" onClick={closeMenu}>
                                <LinkedInLogo />
                                
                            </Link>

                            <ul className={`nav ${isMenuOpen ? 'show' : ''}`} onClick={handleLinkClick}>
                                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                <li className="scroll-to-section"><Link to="/shop">Shop</Link></li>
                                <li className="scroll-to-section"><Link to="/sign-in">Sign In</Link></li>
                            
                                
                                <li className="scroll-to-section">
                                    <Link>
                                        <CartIcon />
                                    </Link>
                                </li>
                                
                            </ul>  
                                
                            <Link className='menu-trigger' onClick={toggleIsMenuOpen}>
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