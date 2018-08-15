import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class CartContainer extends Component {
    onRemoveCart = (item) => (e) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'REMOVE_CART',
            item
        })
    }
    render() {
        const { shop } = this.props;
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Cart Container</h1>
                    <div className="row">
                        { shop.cart.map(item => {
                            return (
                                <Item
                                    onRemoveCart={ this.onRemoveCart(item) }
                                    key={`product-${Math.random()}`}
                                    data={item}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ shop }) => ({
    shop,
});

export default connect(mapStateToProps)(CartContainer);