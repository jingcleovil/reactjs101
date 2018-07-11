import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './common/components/Header';
import Item from './common/components/Item';
import CartContainer from './common/components/CartContainer';
import products from './common/components/data/products';


class App extends Component {

  state = {
    cart: []
  }

  onAddCart = (item) => (e) => {
    const isExist = this.state.cart.find(fItem => {
      return fItem.id === item.id;
    })
    if(!isExist) {
      this.setState({
        cart: this.state.cart.concat(item)
      })
    }
  }

  onRemoveCart = (item) => (e) => {
    if(window.confirm(`Are you sure you want to delete ${item.product}?`)) {
      this.setState({
        cart: this.state.cart.filter(fItem => {
          return fItem.id !== item.id;
        })
      })
    }
  }

  renderProduct = (products) => {
    try {
      return products.map(product => {
        return (
          <Item 
            onAddCart={ this.onAddCart(product) }
            data={product}
            key={`item1-${product.id}`}/>
        )
      })
    } catch(error) {
      console.log(error);
      return (
        <div>Unable to render products. Error 500</div>
      )
    }
    
  }

  render() {

    return (

       <div>
        <Header title="Album" cartCount={this.state.cart.length}/>
        <main role="main">
          <CartContainer 
            cart={this.state.cart} 
            onRemoveCart={this.onRemoveCart}
            />
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                { this.renderProduct(products) }
              </div>
            </div>
          </div>
        </main>
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="">Back to top</a>
            </p>
            <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
