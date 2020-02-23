import React, { Component } from "react";
import Product from "./product.js";
import Filter from "./filter.js";
import ProductModal from "./productModal.js";

import { connect } from "react-redux";

import { updateProducts, toggleModal } from "../actions/products.js";

class Index extends Component {
  componentDidMount() {
    // I've tried to be clever and directly import the json file as a array of products
    // however, when setting iniitalState, the keys 'all.products' magically appear so this function will
    // reduce the products array to be in the shape as it was originally accessed from your repo.
    this.props.updateProducts(this.props.products.all);
  }

  render() {
    const { products, filter } = this.props;

    return (
      <div className="index">
        <div className="faux-navbar admin-nav">
          <h1>Logged in as: Admin</h1>
        </div>
        <div className="faux-navbar">
          <span className="brand">Speakeasy Bar</span>
          <div className="pull-right">
            <span className="li-element active">Drinks</span>
          </div>
        </div>
        <ProductModal />
        <h1 className="intro">Our Drinks</h1>

        <div className="container-n">
          <p className="p-intro">
            Walk in to our fake barbershop and smile at our barber, Hank (he
            gets lonely sitting there all day, not cutting hair.) on your way
            in. Once you say the secret word <i>'Fitzgerald'</i> to Hank, he'll
            open the not-so-secret door to our bar. Inside, you'll be welcomed
            by one of our staff who will ask to pour you a drink. Browse our
            selection below. Oh, and don't tell the police we're here.
          </p>
          <Filter />
          <Product />

          <div className="fab" onClick={() => this.props.toggleModal()}>
            <i className="fal fa-plus fa-2x"></i>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(props) {
  return {
    products: props.products,
    filter: props.filter
  };
}

export default connect(mapStateToProps, {
  updateProducts,
  toggleModal
})(Index);
