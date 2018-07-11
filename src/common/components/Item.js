import React, { Component } from 'react';

const Photo = ({ image }) => {
    if(image) {
        return (
            <img 
                className="card-img-top" 
                src={ image } 
                alt="Car cap" />
        )
    }
    return (
        <img 
            className="card-img-top" 
            src="http://via.placeholder.com/225x100"
            alt="Car cap" />
    )
}   

export default class Item extends Component {


    render() {
        const { product, photo, amount } = this.props.data;

        return (
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <Photo image={photo}/>
                <div className="card-body">
                  <h4 className="card-text">
                    { product } { amount }
                  </h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      { this.props.onAddCart
                          ? <button 
                            onClick={this.props.onAddCart} 
                            type="button" 
                            className="btn btn-sm btn-outline-secondary">
                            Add To Cart
                          </button>
                          : <button 
                            onClick={this.props.onRemoveCart} 
                            type="button" 
                            className="btn btn-sm btn-outline-danger">
                           Remove Cart
                          </button>
                      }
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
