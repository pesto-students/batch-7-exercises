import React from "react";

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: "Apples" }, { name: "KitKat" }, { name: "Red Bull" }],
      newGrocery: ""
    };
    this.onGroceryInputChange = this.onGroceryInputChange.bind(this);
    this.onAddGroceryClick = this.onAddGroceryClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  onGroceryInputChange = function(event) {
    this.setState({ newGrocery: event.target.value });
  };
  onAddGroceryClick = function() {
    this.setState(state => {
      groceries: state.groceries.push({
        name: state.newGrocery
      });
    });
    this.setState({ newGrocery: "" });
  };

  clearList = function() {
    this.setState({ groceries: [] });
  };

  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesList = groceries.map((item, index) => (
      <GroceryListItem key={index} grocery={item} />
    ));
    return (
      <div>
        <label>Grocery: </label>
        <input
          type="text"
          name="grocery"
          value={this.state.newGrocery}
          onChange={this.onGroceryInputChange}
        />
        <button
          className="button"
          name="addGrocery"
          onClick={this.onAddGroceryClick}
        >
          Add
        </button>
        <ul>{groceriesList}</ul>
        <button className="button" name="clearList" onClick={this.clearList}>
          Clear List
        </button>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = function(event) {
    const purchasedGroceryClass = "purchasedGrocery";
    event.target.className =
      event.target.className === purchasedGroceryClass
        ? ""
        : purchasedGroceryClass;
  };
  render() {
    const { grocery } = this.props;
    return (
      <li
        style={{ cursor: "pointer" }}
        className=""
        key={grocery.name}
        onClick={this.onItemClick}
      >
        {grocery.name}
      </li>
    );
  }
}

export default GroceryList;
