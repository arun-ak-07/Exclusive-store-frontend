import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    image: '',
    name: '',
    price: '',
    description: '',
    category: '',
    gender: '',
    brand: '',
    stock: ''
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/getProducts`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const productDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/products/deleteProduct/${productId}`);
      toast.success(response.data.message);
      setProducts(products.filter((prod) => prod._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const startEdit = (product) => {
    setEditId(product._id);
    setEditedProduct({
      image: product.image || '',
      name: product.name || '',
      price: product.price || '',
      description: product.description || '',
      category: product.category || '',
      gender: product.gender || '',
      brand: product.brand || '',
      stock: product.stock || ''
    });
  };

  const saveEdit = async (productId) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/products/updateProduct/${productId}`, editedProduct);
      toast.success(response.data.message);
      setProducts(products.map(prod => (prod._id === productId ? { ...prod, ...editedProduct } : prod)));
      setEditId(null);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold underline underline-offset-4 mb-4">Products : {products.length}</h1>

      {loading ? (
        <div className="text-center text-lg flex justify-center items-center h-screen w-screen">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((prod) => (
            <div key={prod._id} className="w-full h-auto rounded overflow-hidden shadow-lg space-y-2 relative border p-2">
              {editId === prod._id ? (
                <div className='space-y-8 flex flex-col text-black'>
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Image URL"
                    value={editedProduct.image}
                    onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
                  />
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Name"
                    value={editedProduct.name}
                    onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                  />
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Price"
                    value={editedProduct.price}
                    onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                  />
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Description"
                    value={editedProduct.description}
                    onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                  />
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Category"
                    value={editedProduct.category}
                    onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                  />
                  {
                    prod.gender &&
                    <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Gender"
                    value={editedProduct.gender}
                    onChange={(e) => setEditedProduct({ ...editedProduct, gender: e.target.value })}
                  />
                  }
                    <input
                    type="number"
                    className="border rounded p-1"
                    placeholder="Stock"
                    value={editedProduct.stock}
                    onChange={(e) => setEditedProduct({ ...editedProduct, stock: e.target.value })}
                  />
                  <input
                    type="text"
                    className="border rounded p-1"
                    placeholder="Brand Name"
                    value={editedProduct.brand}
                    onChange={(e) => setEditedProduct({ ...editedProduct, brand: e.target.value })}
                  />

                  <div className="flex justify-evenly mt-2">
                    <button
                      className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                      onClick={() => saveEdit(prod._id)}
                    >
                      SAVE
                    </button>
                    <button
                      className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                      onClick={() => setEditId(null)}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img className="h-full w-full object-contain" src={prod.image} alt={prod.name} />
                  </div>
                  <div className="px-4 py-4">
                    <div className="text-base font-semibold mb-2">
                      <span className="text-green-400 font-semibold">Name: </span>{prod.name}
                    </div>
                    <p className="text-orange-600 text-base">
                      <span className="font-semibold text-green-400">Price: </span>₹{prod.price}
                    </p>
                    <p>
                      <span className="font-semibold text-green-400">Description: </span>{prod.description}
                    </p>
                    <p>
                      <span className="font-semibold text-green-400">Category: </span>{prod.category}
                    </p>
                    {prod.gender && <p><span className="font-semibold text-green-400">Gender: </span>{prod.gender}</p>}
                    {prod.stock && <p><span className="font-semibold text-green-400">Stock: </span>{prod.stock}</p>}
                    <p>
                      <span className="font-semibold text-green-400">Brand: </span>{prod.brand}
                    </p>
                  </div>

                  <div className="w-full flex justify-evenly">
                    <button
                      className="px-4 py-1 w-20 text-sm font-semibold bg-blue-200 text-black rounded-sm hover:bg-blue-400"
                      onClick={() => startEdit(prod)}
                    >
                      EDIT
                    </button>
                    <button
                      className="px-4 py-1 w-20 text-sm font-semibold bg-red-200 text-black rounded-sm hover:bg-red-400"
                      onClick={() => productDelete(prod._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
