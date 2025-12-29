import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice.jsx";
import "./ProductListing.css";

const products = [
  // --- ELECTRIC ---
  { id: 1, name: "Tesla Model S Plaid", price: 89000, category: "Electric", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Porsche Taycan Turbo", price: 150000, category: "Electric", image: "https://images.unsplash.com/photo-1614200187524-dc5b8ec2229a?auto=format&fit=crop&w=800&q=80" },
  
  // --- SPORTS ---
  { id: 2, name: "BMW M4 Competition", price: 78000, category: "Sports", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Porsche 911 GT3", price: 161000, category: "Sports", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Lamborghini Huracán", price: 210000, category: "Sports", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Ferrari 488 Pista", price: 330000, category: "Sports", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" },
  
  // --- LUXURY ---
  { id: 3, name: "Audi R8 Performance", price: 158000, category: "Luxury", image: "https://images.unsplash.com/photo-1603553329415-5914f7751b0b?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Rolls-Royce Ghost", price: 340000, category: "Luxury", image: "https://images.unsplash.com/photo-1631214524020-5e1841267c3e?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Bentley Continental GT", price: 235000, category: "Luxury", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80" },
  
  // --- MUSCLE ---
  { id: 4, name: "Ford Mustang Shelby GT500", price: 79000, category: "Muscle", image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80" },
  
  // --- SUV ---
  { id: 6, name: "Lamborghini Urus", price: 230000, category: "SUV", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Range Rover SV", price: 210000, category: "SUV", image: "https://images.unsplash.com/photo-1606148632363-26d5951d959e?auto=format&fit=crop&w=800&q=80" }
];

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = ["Electric", "Sports", "Luxury", "Muscle", "SUV"];

  return (
    <div className="product-listing-page">
      <div className="listing-header">
        <h1>THE SHOWROOM</h1>
        <p>Curated Excellence for the Discerning Driver</p>
      </div>
      
      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h2 className="category-title">{cat} Series</h2>
          <div className="products-grid">
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="img-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="badge">{product.category}</div>
                  </div>
                  <div className="card-info">
                    <h3>{product.name}</h3>
                    <p className="price">${product.price.toLocaleString()}</p>
                    <button
                      className="add-btn"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={!!cartItems[product.id]}
                    >
                      {cartItems[product.id] ? "IN YOUR GARAGE" : "ADD TO COLLECTION"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;