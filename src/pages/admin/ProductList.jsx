import React, { useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Single search term
  const [filters, setFilters] = useState({
    sortBy: "price",
    sortOrder: "asc",
  });

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products/getProducts", {
        params: {
          search: searchTerm,
          sortBy: filters.sortBy,
          sortOrder: filters.sortOrder,
        },
      });
      console.log('response', response.data);
      setProducts(response.data.products);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>

      {/* Search Box */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search products (brand, category, name, price, gender)"
            className="border border-gray-300 p-3 w-full md:w-2/3 rounded-md focus:outline-none"
          />

          {/* Sorting */}
          <div className="flex space-x-2">
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleSortChange}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="brand">Brand</option>
            </select>
            <select
              name="sortOrder"
              value={filters.sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <button
            onClick={fetchProducts}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Results ({totalCount})</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="border border-gray-300 p-4 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <p>Gender: {product.gender}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
