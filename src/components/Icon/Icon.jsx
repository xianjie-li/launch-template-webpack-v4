import React from 'react';
import PropTypes from 'prop-types';

import { setPxforNumber, shakeFlasy } from '../common/util';
import iconMap from './iconMap';

import cls from 'classnames';

const Icon = props => {
  const property = shakeFlasy({
    className: cls(props.className, iconMap[props.type], 'bk-icon', props.spin && 'bk-spin'),
  });

  const sty = props.style || {};

  const style = shakeFlasy({
    ...sty,
    fontSize: setPxforNumber(props.size),
    color: props.color,
  });

  return (
    <i style={style} {...property} />
  );
};

/**
 * size: 大小
 * color: 颜色
 * className： 类名
 * style： 样式对象
 * type: 图标类型
 * */

Icon.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(Object.keys(iconMap)),
  spin: PropTypes.bool
};

export default Icon;