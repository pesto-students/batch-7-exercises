/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {
  state = {
    groceryItem: ''
  };

  setGroceryName(event) {
    this.setState({ groceryItem: event.currentTarget.value });
  }

  render() {
    const { groceryItem } = this.state;
    const { groceryList, addItem, clearList } = this.props;

    const groceries = groceryList.map(({ item, purchased, editing }, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={item + index}>
          <GroceryItem item={item} purchased={purchased} editingItem={editing} itemId={index} />
        </li>
      );
    });

    return (
      <div>
        <input type="text" value={groceryItem} onChange={event => this.setGroceryName(event)} />
        <button type="button" onClick={() => addItem(groceryItem)}>
          Add item to the list
        </button>
        <button type="button" onClick={() => clearList()}>
          Clear list
        </button>
        <ul>{groceries}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groceryList: state.groceryList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item)),
    clearList: () => dispatch(actions.clearList()),
    selectItem: itemId => dispatch(actions.selectItem(itemId)),
    removeItem: itemId => dispatch(actions.removeItem(itemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);
