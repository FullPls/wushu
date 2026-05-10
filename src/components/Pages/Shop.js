import React, { Component } from 'react'

import Items from "D:/Сайт/shop/src/components/Items";
import Categories from "D:/Сайт/shop/src/components/Categories.js";
import ShowFullItem from "D:/Сайт/shop/src/components/ShowFullItem.js";

export class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Меч Дао',
          img: 'dao.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1500'
        },
        {
          id: 2,
          title: 'Палка',
          img: 'gun.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Polearm',
          price: '1000'
        },
        {
          id: 3,
          title: 'Гуидин Наньдао',
          img: 'guidin_nandao.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        },
        {
          id: 4,
          title: 'Гуидин Цзянь',
          img: 'guidin_zjian.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1500'
        },
        {
          id: 5,
          title: 'Гуидин Дао',
          img: 'guidin_dao.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        },
        {
          id: 6,
          title: 'Наконечник для копья',
          img: 'nacon.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Components',
          price: '1600'
        },
        {
          id: 7,
          title: 'Наньдао',
          img: 'nandao.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        },
        {
          id: 8,
          title: 'Пластиковая палка',
          img: 'plast_gun.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Polearm',
          price: '1600'
        },
        {
          id: 9,
          title: 'Кинжалы',
          img: 'shuan_bishou.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Two_handed',
          price: '1600'
        },
        {
          id: 10,
          title: 'Копье',
          img: 'spear.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Polearm',
          price: '1600'
        },
        {
          id: 11,
          title: 'Тайцзи Дао',
          img: 'taiji_dao.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        },
        {
          id: 12,
          title: 'Тайцзи Цзянь',
          img: 'taijzi_zjian.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        },
        {
          id: 13,
          title: 'Цзянь',
          img: 'zjian.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'Swords',
          price: '1600'
        }
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
     
      <div className="wrapper2">
       <div className='presentation'></div>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/> 
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      </div>
    
    )
  }
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) 
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default Shop