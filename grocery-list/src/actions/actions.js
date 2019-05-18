export const ADD_ITEM = 'ADD_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const CLEAR_LIST = 'CLEAR_LIST';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SAVE_ITEM = 'SAVE_ITEM';

export function addItem(item) {
  const itemObject = {
    item,
    purchased: false,
    editing: false
  };
  return { type: ADD_ITEM, itemObject };
}

export function selectItem(itemId) {
  return { type: SELECT_ITEM, itemId };
}

export function clearList() {
  return { type: CLEAR_LIST };
}

export function removeItem(itemId) {
  return { type: REMOVE_ITEM, itemId };
}

export function editItem(itemId) {
  return { type: EDIT_ITEM, itemId };
}

export function saveItem(item, itemId) {
  const itemDetails = {
    item,
    itemId
  };
  return { type: SAVE_ITEM, itemDetails };
}
