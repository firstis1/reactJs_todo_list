import React from 'react';

const List = props => (
  <ul>{props.items.map((obj, index) => <li key={index}>{obj.name}
  <button disabled={obj.disabledFeatures} onClick={() => props.editTodo(obj.id)}>Edit Todo</button>
  <button disabled={obj.disabledFeatures} onClick={() => props.deleteTodo(obj.id)}>Delete Todo</button></li>)}</ul>
);

export default List;
