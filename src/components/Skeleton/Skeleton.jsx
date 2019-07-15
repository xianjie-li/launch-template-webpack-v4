import React from 'react';
import PropTypes from 'prop-types';

function getRandWidth(baseP) {
  let rand = Math.floor(Math.random() * 50);
  return rand + baseP + '%';
}

function getRand(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

const Skeleton = ({ count, img, loading, lineCount, rand, ...props }) => {

  if (rand) {
    lineCount = getRand(2, 5);
  }

  const renderSkeleton = () => (
    Array.apply(null, { length: count }).map((val, ind) => (
      <div key={ind} className="bk-skeleton_wrap">
        <div className="bk-skeleton_item  waves-effect">
          {img && (
            rand
              ? Math.random() > 0.5
                ? <div className="bk-skeleton_img" />
                : null
              : <div className="bk-skeleton_img" />
          )}
          <div className="bk-skeleton_cont">
            <div className="bk-skeleton_title" style={{ width: getRandWidth(30) }} />
            {Array.apply(null, { length: lineCount }).map((item, index) => (
              <div key={index} className="bk-skeleton_textCont">
                <div className="bk-skeleton_text" style={{ width: getRandWidth(10) }} />
                <div className="bk-skeleton_text" style={{ width: getRandWidth(10) }} />
                <div className="bk-skeleton_text" style={{ width: getRandWidth(10) }} />
                <div className="bk-skeleton_text" style={{ width: getRandWidth(10) }} />
              </div>
            ))}
            <div className="bk-skeleton_text" style={{ width: getRandWidth(10) }} />
          </div>
        </div>
      </div>
    ))
  );

  return loading
    ? renderSkeleton()
    : props.children || null;
};

Skeleton.defaultProps = {
  count: 3,
  lineCount: 3,
};

Skeleton.propTypes = {
  loading: PropTypes.bool,    // 是否显示
  count: PropTypes.number,    // 需要渲染的总条数
  lineCount: PropTypes.number,    // 行的数量，不包括行头与行尾
  img: PropTypes.bool,    // 显示图片框
  rand: PropTypes.bool,   // 随机样式
};

/* 当loading为false时，会显示Skeleton的children */

export default Skeleton;