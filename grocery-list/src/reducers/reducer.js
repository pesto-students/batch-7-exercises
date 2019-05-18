import {
  ADD_ITEM,
  SELECT_ITEM,
  CLEAR_LIST,
  REMOVE_ITEM,
  EDIT_ITEM,
  SAVE_ITEM
} from '../actions/actions';

const initialState = {
  groceryList: []
};

export default (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    const newGroceryList = [...state.groceryList];
    newGroceryList.push(action.itemObject);
    return {
      ...state,
      groceryList: newGroceryList
    };
  }

  if (action.type === SELECT_ITEM) {
    const newGroceryList = [...state.groceryList];
    const purchasedState = newGroceryList[action.itemId].purchased;
    newGroceryList[action.itemId].purchased = !purchasedState;
    return {
      ...state,
      groceryList: newGroceryList
    };
  }

  if (action.type === REMOVE_ITEM) {
    const newGroceryList = [...state.groceryList];
    newGroceryList.splice(action.itemId, 1);
    return {
      ...state,
      groceryList: newGroceryList
    };
  }

  if (action.type === EDIT_ITEM) {
    const newGroceryList = [...state.groceryList];
    newGroceryList[action.itemId].editing = true;
    return {
      ...state,
      groceryList: newGroceryList
    };
  }

  if (action.type === SAVE_ITEM) {
    const { itemId, item } = action.itemDetails;
    const newGroceryList = [...state.groceryList];
    newGroceryList[itemId].item = item;
    newGroceryList[itemId].editing = false;
    
    return {
      ...state,
      groceryList: newGroceryList
    };
  }

  if (action.type === CLEAR_LIST) {
    return {
      ...state,
      groceryList: []
    };
  }

  return state;
};
