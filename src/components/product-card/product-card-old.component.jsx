import Button from "../button/button.component"

const ProductCardOld = ({ product }) => {
    const { title, imageUrl, price } = product
    console.log(title);
    

    return (
        <article className="featured__card swiper-slide">
            <img src={imageUrl} alt="" className="featured__image img-fluid"/>
            
            <h2 className="featured__title">{title}</h2>
            <div className="featured__prices">
                <span className="featured__discount">${price}</span>
                <span className="featured__price">$11.99</span>
            </div>

            <Button>Buy Now</Button>
            
           
        </article>
    )
}

export default ProductCardOld