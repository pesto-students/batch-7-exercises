import { connect } from 'react-redux';

import TodoList from './TodoList';
import { addTodo, removeTodo } from '../redux/store';

const mapStateToProps = ({ currentList: { todos } }) => ({ todos });

const bindActionsToDispatch = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  removeTodo: id => dispatch(removeTodo(id)),
});

const TodoListContainer = connect(mapStateToProps, bindActionsToDispatch)(TodoList);

export default TodoListContainer;
