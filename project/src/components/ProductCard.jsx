const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <div className="product-price-badge">
          ${product.price}
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <button
          onClick={() => onAddToCart(product)}
          className="add-to-cart-btn"
        >
          <span className="cart-icon">🛒</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;