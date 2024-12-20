import { Link } from 'react-router-dom';

import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    

    <div className="category-preview-container">
      <h2 className="title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="row">
          {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
