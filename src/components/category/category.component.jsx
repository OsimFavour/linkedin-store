import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss'


const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="row">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
