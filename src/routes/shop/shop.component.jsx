import { useEffect } from 'react'
import { addCollectionAndDocuments } from '../../utils/firebase.utils'
import SHOP_DATA from '../../shop-data'

const Shop = () => {

    // Added products to the firebase store
    
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, [])

    return (
        <div className='p-4 m-4 tet-dark'>SHOP</div>
    )
}

export default Shop