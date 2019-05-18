/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class GroceryItem extends Component {
  state = {
    groceryEditValue: ''
  };

  onSaveHandler(itemId) {
    const { saveItem } = this.props;
    const { groceryEditValue } = this.state;
    saveItem(groceryEditValue, itemId);
  }

  onChangeHandler({ value }) {
    this.setState({ groceryEditValue: value });
  }

  editItemHandler(item, itemId) {
    const { editItem } = this.props;
    this.setState({ groceryEditValue: item });
    editItem(itemId);
  }

  render() {
    const { item, itemId, purchased, editingItem, removeItem, selectItem } = this.props;
    const { groceryEditValue } = this.state;
    const itemStyle = purchased ? { color: 'red' } : { color: 'black' };

    return (
      <div>
        {editingItem ? (
          <div>
            <button type="button" onClick={() => this.onSaveHandler(itemId)}>
              save
            </button>
            <input
              type="text"
              value={groceryEditValue}
              onChange={event => this.onChangeHandler(event.currentTarget)}
            />
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => removeItem(itemId)}>
              x
            </button>
            <button type="button" onClick={() => this.editItemHandler(item, itemId)}>
              edit
            </button>
            <p style={itemStyle} onClick={() => selectItem(itemId)}>
              {item}
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    selectItem: itemId => dispatch(actions.selectItem(itemId)),
    removeItem: itemId => dispatch(actions.removeItem(itemId)),
    editItem: itemId => dispatch(actions.editItem(itemId)),
    saveItem: (item, itemId) => dispatch(actions.saveItem(item, itemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryItem);
