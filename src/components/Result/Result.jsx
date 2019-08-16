import React from 'react';
import PropTypes from 'prop-types';

import { Success, Error, Waiting, Warning, NotFound, ServeError } from './icons.jsx';

const icons = {
  success: Success,
  error: Error,
  waiting: Waiting,
  warning: Warning,
  // '404': NotFound,
  // '500': ServeError,
}

const Result = ({type}) => {

  const Icon = icons[type]

  return (
    <div className="bk-result_wrap">
      <div className="bk-result_cont">
        <div className="bk-result_icon">
          <Icon></Icon>
        </div>
        <div className="bk-result_title">挑剔</div>
        <div className="bk-result_desc">挑剔挑剔挑剔</div>
        <button className="bk-result_link waves-effect" onClick={() => {
        }}>click
        </button>
        <button className="bk-result_link bk-result_red waves-effect"
                onClick={() => {
                }}>click
        </button>
      </div>
    </div>
  );
};

Result.defaultProps = {
  type: 'success',
  title: '操作成功!',
  btn: ['返回']
};

Result.propTypes = {
  type: PropTypes.oneOf([
    'success', 'warning', 'error', 'waiting', '404', '500'
  ]),
  title: PropTypes.string,
  desc: PropTypes.string,
  btn: PropTypes.array,   // 按钮文本，最多两位
};

export default Result;