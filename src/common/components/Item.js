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

        return (
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <Photo image={this.props.photo}/>
                <div className="card-body">
                  <p className="card-text">
                    { this.props.title }
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Add To Cart</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
