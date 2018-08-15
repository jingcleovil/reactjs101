import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './common/components/Header';
import Item from './common/components/Item';
import CartContainer from './common/components/CartContainer';
import { connect } from 'react-redux';

class App extends Component {

  onAddCart = (item) => (e) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_CART',
      item
    })
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
    const { products, shop } = this.props;
    return (
       <div>
        <Header title="Album" cartCount={shop.cart.length}/>
        <main role="main">
          <CartContainer />
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                { this.renderProduct(products.lists) }
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

const mapStateToProps = ({ shop, products }) => ({
  shop,
  products,
});

export default connect(mapStateToProps)(App);