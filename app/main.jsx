console.log("this shit works!");
var React = require('react/addons');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initialGrocData = [{
  name: "Marmite"
},
  {
    name: "Cheese"
  },
  {
    name: "Bread",
    purchased: true
  },
  {
    name: "Butter",
    purchased: true
  }
];

React.render(<GroceryItemList items={initialGrocData}/>, app);
