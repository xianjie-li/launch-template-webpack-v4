import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import cls from 'classnames';

const mapStatusToIcon = {
  success: 'success',
  warning: 'info',
  error: 'error',
  validating: 'cycle',
};

const FormItem = props => {
  return (
    <label className={cls('bk-formItem', props.validateStatus && `__${props.validateStatus}`)}>

      {props.label && (
        <div className="bk-formItem_label">
          {props.label}
          {props.required && <i className="bk-formItem_require">*</i>}
        </div>
      )}

      <div className="bk-formItem_cont">

        <div className="bk-formItem_contMain">
          {props.children}
        </div>

        {props.help && (
          <div className="bk-formItem_info">
            {props.help}
          </div>
        )}
      </div>

      {props.hasArrow && (
        <Icon type="left" className="bk-formItem_arrow" />
      )}

      {props.hasFeedback && (
        <div className={cls('bk-formItem_statusIcon')}>
          <Icon type={mapStatusToIcon[props.validateStatus]} spin={props.validateStatus === 'validating'} />
        </div>
      )}

    </label>
  );
};

FormItem.defaultProps = {
  hasFeedback: false,
  hasArrow: false,
};

FormItem.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  hasFeedback: PropTypes.bool,
  hasArrow: PropTypes.bool,
  validateStatus: PropTypes.oneOf([
    'success', 'warning', 'error', 'validating',
  ]),
};

export default FormItem;