const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />
      
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>
      </div>
      
      <div className="cart-item-controls">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
        >
          -
        </button>
        
        <span className="quantity-display">{item.quantity}</span>
        
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
        
        <button
          onClick={() => onRemoveItem(item.id)}
          className="remove-btn"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;