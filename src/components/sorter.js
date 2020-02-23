// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { filterProducts } from "../actions/filters.js";

// class Filter extends Component {
//   changeFilter(e) {
//     console.log("event => ", e.target.value);

//     this.props.filterProducts(e.target.value);
//   }

//   isSelected(filterOption) {
//     return "";
//   }

//   render() {
//     const { filter } = this.props;

//     var filterOptions = filter.options.map(filterOption => {
//       return (
//         <option
//           key={"option_" + filterOption.id + "_key"}
//           defaultValue={filterOption.id}
//         >
//           {filterOption.text}
//         </option>
//       );
//     });

//     return (
//       <div className="product__filter-container">
//         <label htmlFor="product-filter">Filter products by: </label>
//         <select
//           name="product-filter"
//           className="product__filter"
//           onChange={e => this.changeFilter(e)}
//         >
//           {filterOptions}
//         </select>
//       </div>
//     );
//   }
// }

// function mapStateToProps(props) {
//   console.log("map state => ", props);
//   return {
//     filter: props.filter
//   };
// }

// export default connect(mapStateToProps, {
//   filterProducts
// })(Filter);