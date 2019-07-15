import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import cls from 'classnames';

const Spin = props => {
  const full = props.full;
  const spin = props.spinning;

  return (
    <CSSTransition
      appear
      mountOnEnter
      unmountOnExit
      classNames="bk-fade"
      in={spin}
      timeout={350}>
      <div className={cls('bk-spin_wrap', full && '__mask', props.dark && '__dark')}>
        <div className={cls('bk-spin_inner', props.size && `__${props.size}`)}>
          <div className={cls('bk-spin', `__type${props.type}`)}>
            <div />
            <div />
            <div />
            <div />
          </div>
          {props.tip && (
            full
              ? <p className="bk-spin_tip">{props.tip}</p>
              : <span className="bk-spin_tip">{props.tip}</span>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

Spin.defaultProps = {
  type: 1,
  spinning: true,
};

Spin.propTypes = {
  type: PropTypes.oneOf([
    1, 2, 3,
  ]),
  size: PropTypes.oneOf([
    'small', 'large',
  ]),
  full: PropTypes.bool,   // 撑满父元素
  dark: PropTypes.bool,   // 黑色风格
  tip: PropTypes.string,
  spinning: PropTypes.bool,
};

export default Spin;