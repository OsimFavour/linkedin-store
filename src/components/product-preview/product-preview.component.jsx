import ProductCard from "../product-card/product-card.component";
import CustomSwiper, { SwiperSlide } from "../custom-swiper/custom-swiper.component";

import PRODUCT_DATA from '../../product-data.json';
import ProductCardOld from "../product-card/product-card-old.component";
import CategoryPreview from "../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const ProductPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const firstCategories = categoriesMap[0]

    console.log('First categories >>>', firstCategories);
    
    
    return (
        <>
            <div className="featured__header section-heading">
                <h2 className='p-4'>
                    Featured Collection
                </h2>
            </div>

            <div className="categories-preview">
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                    <CategoryPreview key={title} title={title} products={products} />
                    );
                })}

                </div>

            <CustomSwiper
                onSlideChange={() => console.log('slide change')}           
            >
                <div className="">

                    <div className="featured__swiper">
                        <div className="container w-100">
                            {PRODUCT_DATA.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCardOld key={product.id} product={product} />
                                </SwiperSlide>
                            ))}
                        
                        </div>
                        
                    </div>

                </div>
                
            </CustomSwiper>

        </>
    )
}

export default ProductPreview