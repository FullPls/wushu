import React from 'react';
import '../css/headfoot.css'; // путь может отличаться

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          {/* Контакты */}
          <div className="footer-contacts">
            <p>
              <strong>Региональная общественная спортивная организация</strong><br />
              «Федерация ушу Алтайского края»
            </p>
            <p>
              ОГРН 1082202001200 &nbsp; ИНН 2225094971<br />
              Официальный представитель Федерации ушу России в Алтайском крае.<br />
              Приказ о государственной аккредитации №40/О/4540 от 26.03.2015 г.
            </p>
            <p className="footer-phone">
              <a href="tel:+79059863814">8 (905) 986-38-14</a>
              &nbsp;&nbsp;
              <a href="mailto:altai.wushu@mail.ru">altai.wushu@mail.ru</a>
            </p>
          </div>

          {/* Социальные иконки (только VK) */}
          <div className="footer-social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/barnaul_wushu_arwf"
              aria-label="Мы в ВКонтакте"
            >
              <img src="img/icons/vk.png" alt="VK" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}