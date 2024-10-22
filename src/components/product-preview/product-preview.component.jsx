import ProductCard from "../product-card/product-card.component";
import CustomSwiper, { SwiperSlide } from "../custom-swiper/custom-swiper.component";

import PRODUCT_DATA from '../../product-data.json';

const ProductPreview = () => {
    return (
        <>
            <div className="featured__header section-heading">
                <h2 className='p-4'>
                    Featured Books
                </h2>
            </div>

            <CustomSwiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}            
            >
                <div className="featured__container featured__section">

                    <div className="featured__swiper">
                        <div className="container w-100">
                            {PRODUCT_DATA.map((productData) => (
                                <SwiperSlide key={productData.id}>
                                    <ProductCard key={productData.id} productData={productData} />
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