import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/to_cabinet.css';

export function Cabinet() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  if (!currentUser) {
    return (
      <div className="wrapper2 page-cabinet">
        <div className="container mt-4">
          <h2>Личный кабинет</h2>
          <p>Вы не авторизованы.</p>
          <Link to="/login" className="btn btn-primary">Войти</Link>
        </div>
      </div>
    );
  }

  const logout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="wrapper2 page-cabinet">
      <div className="container mt-4">
        <h2>Личный кабинет</h2>
        <ul>
          <li>ФИО: {currentUser.name || '—'}</li>
          <li>Телефон: {currentUser.phone || '—'}</li>
          <li>Email: {currentUser.email}</li>
        </ul>
        <button className="btn btn-success" onClick={logout}>Выйти</button>
      </div>
    </div>
  );
}

export default Cabinet;
