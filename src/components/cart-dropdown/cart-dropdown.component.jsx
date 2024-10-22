import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'

import './cart-dropdown.styles.scss'


const CartDropdown = () => {

    const navigate = useNavigate()

    const goToCheckoutHandler = () => navigate('/checkout')

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                Your cart is empty
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown