/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

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
      newItem: '',
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  addNewItem(e) {
    e.preventDefault();
    const { newItem, groceries } = this.state;
    if (newItem.length > 0) {
      this.setState({
        groceries: [...groceries, { name: newItem }],
        newItem: '',
      });
    }
  }

  handleOnChange({ currentTarget }) {
    this.setState({ newItem: currentTarget.value });
  }

  clearAll() {
    this.setState({ groceries: [] });
  }

  render() {
    const { newItem, groceries } = this.state;
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem key={item.name} grocery={item} />
    ));
    const ulStyle = { padding: '0px' };
    const buttonStyle = {
      cursor: 'pointer',
      border: '0',
      color: '#ffffff',
      fontSize: '16px',
    };
    const dangerButtonStyle = {
      ...buttonStyle,
      padding: '16px',
      backgroundColor: '#f44336',
    };

    const primaryButtonStyle = {
      ...buttonStyle,
      marginLeft: '8px',
      backgroundColor: '#4caf50',
    };

    return (
      <div>
        <form onSubmit={this.addNewItem}>
          <label htmlFor="newItem">
            New Item:
            <input type="text" value={newItem} onChange={this.handleOnChange} name="newItem" />
          </label>
          <button style={primaryButtonStyle} type="submit">
            Add
          </button>
        </form>
        <ul style={ulStyle}>{groceriesComponents}</ul>
        <button type="button" onClick={this.clearAll} style={dangerButtonStyle}>
          Clear All
        </button>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { purchased } = this.state;
    this.setState({ purchased: !purchased });
  }

  render() {
    const { grocery } = this.props;
    const { purchased } = this.state;
    const itemStyle = { margin: '8px' };
    const buttonStyle = {
      cursor: 'pointer',
      padding: '16px 32px',
      backgroundColor: '#f5f5f5',
      width: '320px',
      border: '0',
      fontSize: '1em',
    };
    const purchasedItemStyle = { ...buttonStyle, color: 'red' };

    return (
      <li style={itemStyle}>
        <button
          type="button"
          style={purchased ? purchasedItemStyle : buttonStyle}
          onClick={this.handleOnClick}
        >
          {grocery.name}
        </button>
      </li>
    );
  }
}

GroceryListItem.defaultProps = {
  grocery: '',
};

GroceryListItem.propTypes = {
  grocery: PropTypes.objectOf(PropTypes.string),
};

export default GroceryList;
