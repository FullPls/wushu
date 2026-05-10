import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/to_registration.css';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u) => u.email === email)) {
      setOk('');
      setError('Пользователь с такой почтой уже существует');
      return;
    }

    users.push({ name, email, phone, password });
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    setOk('Регистрация успешна. Можно войти.');
    setTimeout(() => navigate('/login'), 700);
  };

  return (
    <div className="wrapper2 page-register">
      <div className="container mt-4 reg" style={{ maxWidth: 520 }}>
        <h2>Регистрация</h2>
        <form onSubmit={onSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {ok && <div className="alert alert-success">{ok}</div>}
          <input className="form-control mb-2" placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="form-control mb-2" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className="form-control mb-3" type="password" placeholder="Пароль" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-success" type="submit">Зарегистрироваться</button>
          <p className="mt-3 mb-0">Уже зарегистрированы? <Link to="/login">Войти</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
