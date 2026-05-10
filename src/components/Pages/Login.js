import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../css/to_login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError('Неверный логин или пароль');
      return;
    }
    localStorage.setItem('currentUser', JSON.stringify({ email: user.email, name: user.name, phone: user.phone }));
    navigate('/cabinet');
  };

  return (
    <div className="wrapper2 page-login">
      <div className="container mt-4 reg" style={{ maxWidth: 480 }}>
        <h2>Авторизация</h2>
        <form onSubmit={onSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="form-control mb-3" type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-success" type="submit">Войти</button>
          <p className="mt-3 mb-0">Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
