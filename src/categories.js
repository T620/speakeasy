// this file plucks out the categories from products.json to use in our filter

import products from "./products.json";

import _ from "lodash";

export default function categories() {
  var categories = [];
  var options = [];

  // return all categories from products array
  categories = products.map(product => {
    return product.category;
  });

  // and use lodash to remove duplicates so we have a unique list of options
  categories = _.uniq(categories);

  // add an 'all' category so we can remove the filter
  categories.push("All Products");

  // and sort by category asc
  categories = _.sortBy(categories);

  // now we need to add an ID and a key value for the dropdown
  for (var i = 0; i < categories.length; i++) {
    // using for (var = 0;) loop because I needed a counter to generate IDs
    options.push({
      text: categories[i],
      id: i,
      key: categories[i].toLowerCase().replace(" ", "_")
    });
  }

  // chefs-kiss.gif
  return options;
}
