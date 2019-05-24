import React from 'react';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
  }

  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem grocery={item} />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>
           {groceries.map(grocery => <li>{ grocery.name }</li>)} 
        </ul>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItems : '' };
    console.log(this.groceriesComponents);
    
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  addItem(event) {
    this.setState({newItems: event.target.value});
  }

  render() {
    console.log(this.state.grocery);
    //{ groceries } = this.props;
    return (
      <div>
        <input type="text" value={this.state.newItems} onChange={this.state.newItems} />
        <buton onClick={this.addItem}>
          Add
        </buton>
      </div>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
