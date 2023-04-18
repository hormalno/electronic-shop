import React from 'react';
import {useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <input className="input" {...field} {...props} />
      {meta.touched && meta.error ? (<div className="errorClass">{meta.error}</div>) : null}
    </div>
  );
};

export const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.containerclass}>
      <textarea className="input" {...field} {...props} ></textarea>
      {meta.touched && meta.error ? (<div className="errorClass">{meta.error}</div>) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="input-checkbox">
      <input type="checkbox" {...field} {...props} />
      <label htmlFor={props.id || props.name}>
        {children}
      </label>
      {meta.touched && meta.error ? (<div className="errorClass">{meta.error}</div>) : null}
    </div>
  );
};

export const MyRadio = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'radio' });
  return (
    <div className="input-radio">
      <input type="radio" {...field} {...props} />
      <label htmlFor={props.id || props.name}>
        {children}
      </label>
      <div className="caption">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export const MyRadioStar = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'radio' });
  return (
    <>
      <input type="radio" {...field} {...props} />
      <label htmlFor={props.id || props.name}>
        {children}
      </label>
    </>
  );
}; 

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (<div className="errorClass">{meta.error}</div>) : null}
    </div>
  );
};