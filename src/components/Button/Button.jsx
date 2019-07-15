import React from 'react';
import PropTypes from 'prop-types';

import cls from 'classnames';
import Spin from '../Spin';

const Button = ({ className, outline, size, block, circle, color, loading, children, disabled, ...props }) => {

  let waves = !disabled;
  if (loading) {
    waves = false;
    disabled = loading;
  }

  const _cls = cls(
    'bk-btn',
    className,
    size ? `__${size}` : false,
    color ? `__${color}` : false,
    {
      'waves-effect': waves,
      __outline: outline,
      __block: block,
      __circle: circle,
    },
  );

  return (
    children ? (
      <button
        {...props}
        className={_cls}
        disabled={disabled}>
        <Spin full size="small" spinning={loading} />
        {children}
      </button>
    ) : null
  );
};

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'large',
  ]),
  block: PropTypes.bool,
  circle: PropTypes.bool,
  color: PropTypes.oneOf([
    'info',
    'success',
    'error',
    'warning',
  ]),
};

export default Button;