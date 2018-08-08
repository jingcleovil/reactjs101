import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class CartContainer extends Component {

    render() {
        const { cart } = this.props;

        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Cart Container</h1>
                    <div className="row">
                        { cart.map(item => {
                            return (
                                <Item 
                                    onRemoveCart={ this.props.onRemoveCart(item) }
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

const mapStateToProps = (state) => {
    // console.log(state, 'cart container');
    return {

    }
}

export default connect(mapStateToProps)(CartContainer);