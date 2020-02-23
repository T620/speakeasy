import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal, create } from "../actions/products";

class ProductModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "Beers", // default to beer
      description: ""
    };

    this.saveProduct = this.saveProduct.bind(this);
  }

  closeModal() {
    this.props.toggleModal();
  }

  saveProduct() {
    this.props.create(this.state);

    this.closeModal();
  }

  changeInputValue(e) {
    e.preventDefault();

    var fieldName = e.target.name;

    switch (fieldName) {
      case "product_name":
        this.setState({
          name: e.target.value
        });
        break;
      case "product_description":
        this.setState({
          description: e.target.value
        });
        break;
      case "product_category":
        this.setState({
          category: e.target.value
        });
        break;
      default:
        console.warn("default change input value: ", e.target);
        break;
    }
  }

  selectCategory(e) {
    e.preventDefault();

    this.setState({
      category: e.target.value
    });
  }

  render() {
    const { modal, filter } = this.props;

    if (modal.isOpen) {
      var filterOptions = [...filter.options];

      // remove the 'all products label from our products UI filter
      filterOptions = filterOptions.filter(options => {
        return options.text !== "All Products";
      });

      var filterOptions = filterOptions.map(filterOption => {
        return (
          <option
            key={"option_" + filterOption.id + "_key"}
            defaultValue={filterOption.id}
          >
            {filterOption.text}
          </option>
        );
      });

      var categoryDropdown = (
        <div className="product__filter-container">
          <label htmlFor="product-filter">Category: </label>
          <select
            name="product-category"
            className="product__filter"
            id="form_product-filter"
            onChange={e => this.selectCategory(e)}
          >
            {filterOptions}
          </select>
        </div>
      );

      return (
        <div className="modal-wrapper">
          <div className="modal taskModal animated slideInDown">
            <h3>Add new product</h3>
            <form className="modal__form" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                className="form-control faux-input"
                name="product_name"
                id="form_product-name"
                onChange={e => this.changeInputValue(e)}
                placeholder="Drink name"
              ></input>

              {categoryDropdown}

              <textarea
                className="form-control faux-input"
                name="product_description"
                id="form_product-description"
                onChange={e => this.changeInputValue(e)}
                placeholder="Drink description"
              ></textarea>

              <button
                class="btn btn-primary"
                onClick={() => this.saveProduct()}
              >
                Save
              </button>
            </form>
          </div>
          <div className="fab" onClick={() => this.closeModal()}>
            <i className="fal fa-times fa-2x"></i>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

function mapStateToProps(props) {
  return {
    modal: props.modal,
    filter: props.filter
  };
}

export default connect(mapStateToProps, {
  toggleModal,
  create
})(ProductModal);
