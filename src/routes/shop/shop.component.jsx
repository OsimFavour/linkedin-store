import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { setCategories } from '../../store/categories/category.slice';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';

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
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop