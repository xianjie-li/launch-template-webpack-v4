import React from 'react';
import PropTypes from 'prop-types';

import cls from 'classnames';

const Form = props => {
  return (
    <form className={cls('bk-form', { __row: props.layout === 'row' })} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

Form.propTypes = {
  layout: PropTypes.oneOf(['row', 'col']),
  onSubmit: PropTypes.func
};

export default Form;