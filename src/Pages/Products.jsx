import {
  Link,
  Outlet,
  useSearchParams
} from "react-router-dom";

import useFetch from "../Hooks/useFetch";

import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";

function Products() {

  const [searchParams, setSearchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") || "";

  const sort =
    searchParams.get("sort") || "default";

  const {
    data,
    loading,
    error
  } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );

  const products = data?.products || [];

  let filteredProducts = products.filter(
    product =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (sort === "low") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  if (sort === "high") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  }

  const handleSearch = value => {

    const params = new URLSearchParams(
      searchParams
    );

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  const handleSort = value => {

    const params = new URLSearchParams(
      searchParams
    );

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    setSearchParams(params);
  };

  return (
    <section className="page">

      <div className="page-heading">

        <p className="small-title">
          OUR STORE
        </p>

        <h1>Products</h1>

        <p>
          Search, filter and explore our
          products.
        </p>

      </div>

      {/* Nested category navigation */}

      <div className="category-links">

        <Link to="/products">
          All Products
        </Link>

        <Link to="/products/category/laptops">
          Laptops
        </Link>

        <Link to="/products/category/smartphones">
          Smartphones
        </Link>

        <Link to="/products/category/beauty">
          Beauty
        </Link>

        <Link to="/products/category/groceries">
          Groceries
        </Link>

      </div>

      {/* Search Parameters */}

      <div className="filters">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e =>
            handleSearch(e.target.value)
          }
        />

        <select
          value={sort}
          onChange={e =>
            handleSort(e.target.value)
          }
        >

          <option value="default">
            Default
          </option>

          <option value="low">
            Price Low to High
          </option>

          <option value="high">
            Price High to Low
          </option>

        </select>

      </div>

      {/* Child routes appear here */}

      <Outlet />

      {loading && <Loading />}

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {!loading &&
        !error &&
        !window.location.pathname.includes(
          "/category/"
        ) && (

          <div className="product-grid">

            {filteredProducts.map(product => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

    </section>
  );
}

export default Products;