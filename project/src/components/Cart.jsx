import CartItem from './CartItem';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, total }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="cart-backdrop"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'cart-open' : ''}`}>
        <div className="cart-container">
          {/* Header */}
          <div className="cart-header">
            <h2 className="cart-title">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="cart-close-btn"
            >
              ✕
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p className="empty-cart-text">Your cart is empty</p>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span className="total-label">Total:</span>
                <span className="total-amount">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;