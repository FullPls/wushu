import React, { useState, useEffect } from 'react';
import { FaBasketShopping, FaBars, FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import Order from './Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../headfoot.css';

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((el) => (total += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Сумма: {new Intl.NumberFormat().format(total)}₽{' '}
        <button className="SendOrder">Заказать</button>
      </p>
    </div>
  );
};

const showNothing = () => (
  <div className="empty">
    <h2>Корзина пуста</h2>
  </div>
);

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isShopPage = location.pathname === '/';

  useEffect(() => {
    if (!isShopPage) {
      setCartOpen(false);
    }
  }, [isShopPage]);

  return (
    <header>
      <div className="headbar">
        <div className="container">
          <div className="headbar-wrap">
            <Link to="/main" className="logo-link">
              <img className="emblem" src="./img/icons/logo.png" alt="logo" />
            </Link>

            {/* Гамбургер-кнопка (видна только на мобильных) */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>

            {/* Основное меню */}
            <nav className={`headbar-menu ${menuOpen ? 'open' : ''}`}>
              <ul onClick={() => setMenuOpen(false)}>
                <li><Link to="/main">Главная</Link></li>
                <li><Link to="/timetable">Расписание</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/">Магазин</Link></li>
                <li><Link to="/filials">Филиалы</Link></li>
                <li><Link to="/about">Об Ушу</Link></li>
                <li><Link to="/antidoping">Антидопинг</Link></li>
              </ul>
            </nav>

            {/* Корзина только на странице магазина */}
            <div className="header-actions">
              {isShopPage && (
                <>
                  <FaBasketShopping
                    onClick={() => setCartOpen(!cartOpen)}
                    className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
                  />
                  {cartOpen && (
                    <div className="shop-cart">
                      {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                  )}
                </>
              )}

              <Link to="/cabinet" className="user-link">
                <img className="userim" src="./img/icons/user.png" alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}