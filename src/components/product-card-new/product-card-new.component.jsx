import { useSelector } from 'react-redux';
import './product-card-new.styles.scss'
import Producter from './producter.component'
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';


const ProductCardNew = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <section className="product-container">
            <div className="text-center container py-5">
                <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>

                <div className="row">
                    <Producter />
                    <Producter />
                    <Producter />
                    <Producter />

                    
                </div>

                <div className="">
                    {Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (
                            <div className="">
                                <h2>
                                <Link className="" to={title}>{title.toUpperCase()}</Link>
                                </h2>
                                <div className="row">
                                    {products
                                        .filter((_, idx) => idx < 3)
                                        .map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                          </div>
                        );
                    })}
                </div>

                
            </div>
        </section>
    )
}

export default ProductCardNew