import React, { useState } from 'react';

const Input = (props) => {
  return (
    <div className="input-group mt-3">
      <span className="input-group-text">{props.children}</span>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        aria-label={props.children}
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
