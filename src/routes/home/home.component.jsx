import React from 'react'
import Banner from '../../components/banner/banner.component'
import ProductPreview from '../../components/product-preview/product-preview.component'
import SubscribeSection from '../../components/subscribe-section/subscribe-section.component'

const Home = () => {
    return (
        <>
            <Banner />
            <ProductPreview />
            <SubscribeSection />
        </>
    )
}

export default Home