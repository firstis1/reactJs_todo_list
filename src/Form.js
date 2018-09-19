import React from 'react';

const Form = props => (
      <div>
        <form className="App" onSubmit={props.onSubmit}>
          <input value={props.name} onChange={props.onChange} />
          <button>{props.buttonName}</button>
        </form>        
      </div>
    );
export default Form;
