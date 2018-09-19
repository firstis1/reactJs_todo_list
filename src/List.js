import React from 'react';

const List = props => (
  <ul>{props.items.map((obj, index) => <li key={index}>{obj.name}</li>)}</ul>
);

export default List;
