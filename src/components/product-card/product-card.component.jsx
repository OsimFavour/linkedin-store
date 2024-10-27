import { Link } from "react-router-dom"
import Button from "../button/button.component"

import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product

    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src={imageUrl} alt='' className="w-100" />
                    <Link href="#!">
                    
                    <div className="hover-overlay">
                        <div className="mask"></div>
                    </div>
                    </Link>
                </div>
                <div className="card-body">
                    <Link href="" className="text-reset">
                        <h5 className="card-title mb-3">{name}</h5>
                    </Link>
                    {/* <Link href="" className="text-reset">
                        <p>{name}</p>
                    </Link> */}
                    <h6 className="mb-3">${price}</h6>

                    <Button>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard