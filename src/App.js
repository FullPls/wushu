import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import Main from './components/Pages/Main';
import { News } from './components/Pages/News';
import { Filials } from './components/Pages/Filials';
import { Timetable } from './components/Pages/Timetable';
import { About } from './components/Pages/About';
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { Cabinet } from './components/Pages/Cabinet';
import { Antidoping } from './components/Pages/Antidoping';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        { id: 1, title: 'Меч Дао', img: 'dao.jpg', desc: 'Спортивный меч дао.', category: 'Swords', price: '1500' },
        { id: 2, title: 'Шест', img: 'gun.jpg', desc: 'Базовый шест для тренировок.', category: 'Polearm', price: '1000' },
        { id: 3, title: 'Наньдао', img: 'nandao.jpg', desc: 'Меч для южного стиля.', category: 'Swords', price: '1600' },
        { id: 4, title: 'Копье', img: 'spear.jpg', desc: 'Тренировочное копье.', category: 'Polearm', price: '1600' },
        { id: 5, title: 'Цзянь', img: 'zjian.jpg', desc: 'Классический прямой меч.', category: 'Swords', price: '1600' }
      ],
      showFullItem: false,
      fullItem: {}
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category)
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    if (!this.state.orders.find((el) => el.id === item.id)) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  render() {
    return (
      <div className="wrapper site-chrome">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Routes>
          <Route
            path="/"
            element={(
              <div className="wrapper2">
                <div className="presentation" />
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
                {this.state.showFullItem && (
                  <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />
                )}
              </div>
            )}
          />
          <Route path="/main" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/filials" element={<Filials />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/about" element={<About />} />
          <Route path="/antidoping" element={<Antidoping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cabinet" element={<Cabinet />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
