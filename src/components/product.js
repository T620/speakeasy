import React, { Component } from "react";
import { deleteProduct } from "../actions/products";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delete(e, productName) {
    e.preventDefault();

    this.props.deleteProduct(productName);
  }

  render() {
    const { products, filter } = this.props;

    if (filter.selected !== 0) {
      var allProducts = products.filtered.map(product => {
        return (
          <div className="product__tile" key={product.name + "_key"}>
            <h1>{product.name}</h1>
            <span className="fancy-border"></span>
            <p className="product__description">{product.description}</p>
            <i className="product__category">{product.category}</i>

            <button
              className="btn btn-danger"
              onClick={e => this.delete(e, product.name)}
            >
              Delete {product.name}
            </button>
          </div>
        );
      });
    } else {
      var allProducts = products.all.map(product => {
        return (
          <div className="product__tile" key={product.name + "_key"}>
            <h1>{product.name}</h1>
            <span className="fancy-border"></span>
            <p className="product__description">{product.description}</p>
            <i className="product__category">{product.category}</i>

            <button
              className="btn btn-danger"
              onClick={e => this.delete(e, product.name)}
            >
              Delete {product.name}
            </button>
          </div>
        );
      });
    }

    return <div className="products-list">{allProducts}</div>;
  }
}

function mapStateToProps(props) {
  return {
    products: props.products,
    filter: props.filter
  };
}

export default connect(mapStateToProps, {
  deleteProduct
})(Product);
