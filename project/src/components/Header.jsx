const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">ShopHub</h1>
          </div>
          
          <button
            onClick={onCartClick}
            className="cart-button"
          >
            <span className="cart-icon">🛒</span>
            {cartItemsCount > 0 && (
              <span className="cart-badge">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;