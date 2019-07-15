import React from 'react';
import PropTypes from 'prop-types';

const FormFoot = props => {
  return (
    <div className="bk-formFoot" style={props.style}>
      <span>{props.desc}</span>
      {props.children}
    </div>
  );
};

FormFoot.propTypes = {
  style: PropTypes.object,
  desc: PropTypes.oneOf([
    PropTypes.node
  ])
};

export default FormFoot;