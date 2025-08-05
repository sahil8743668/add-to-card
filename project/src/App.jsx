import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice
  } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="app">
      <Header 
        cartItemsCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="main-content">
        <div className="hero-section">
          <h2 className="hero-title">Featured Products</h2>
          <p className="hero-subtitle">Discover our handpicked selection of premium products</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={totalPrice}
      />
    </div>
  );
}

export default App;