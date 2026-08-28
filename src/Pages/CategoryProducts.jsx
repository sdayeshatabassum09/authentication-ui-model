import { useParams } from "react-router-dom";

import useFetch from "../Hooks/useFetch";

import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";

function CategoryProducts() {

  const { category } = useParams();

  const {
    data,
    loading,
    error
  } = useFetch(
    `https://dummyjson.com/products/category/${category}`
  );

  const products = data?.products || [];

  return (
    <div>

      <div className="category-heading">

        <h2>
          {category.replaceAll("-", " ")}
        </h2>

        <p>
          Products in this category
        </p>

      </div>

      {loading && <Loading />}

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {!loading &&
        !error && (

          <div className="product-grid">

            {products.map(product => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

    </div>
  );
}

export default CategoryProducts;