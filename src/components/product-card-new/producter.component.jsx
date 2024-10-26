import { Link } from "react-router-dom"
import Button from "../button/button.component"

import './producter.styles.scss'

const Producter = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" alt='' className="w-100 h-95" />
                    <Link href="#!">
                    
                    <div className="hover-overlay">
                        <div className="mask"></div>
                    </div>
                    </Link>
                </div>
                <div className="card-body">
                    <Link href="" className="text-reset">
                        <h5 className="card-title mb-3">Product name</h5>
                    </Link>
                    <Link href="" className="text-reset">
                        <p>Category</p>
                    </Link>
                        <h6 className="mb-3">$61.99</h6>

                    <Button>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Producter