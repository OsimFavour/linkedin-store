import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { setCategories } from '../../store/categories/category.slice';

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories')
            console.log(categoriesArray);
            
            dispatch(setCategories(categoriesArray))
        }

        getCategoriesMap()
    }, [])


    
    return (
        <>
            
        </>
    )
}

export default Shop