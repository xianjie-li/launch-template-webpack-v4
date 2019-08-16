import React, { useState, useEffect, useRef } from 'react';

const Picture = props => {
  let img = useRef(null);
  let canvas = useRef(null);
  let [loadErr, setLoadErr] = useState(false);

  useEffect(() => {
    // 针对直接没有传src的情况，生成一个假事件对象并设置默认图
    if (!props.src) {
      setFeedbackImg({
        target: img.current,
      });
    }
    // 已经设置过错误状态，使用新地址还原图片并清除canvas
    if (loadErr) {
      setLoadErr(false);
    }

    return () => {
      if (canvas.current) {
        canvas.current.parentNode && canvas.current.parentNode.removeChild(canvas.current);
        canvas.current = null;
      }
    };
  }, [props.src]);

  function setFeedbackImg({ target: img }) {
    if (loadErr && canvas.current) return;
    setLoadErr(true);

    let width = img.offsetWidth;
    let height = img.offsetHeight;

    if (!canvas.current) {
      createCanvas();
    }

    optCanvas(width, height);
  }

  function createCanvas() {
    let parent = img.current.parentNode;
    let cvs = document.createElement('canvas');
    if (props.className) cvs.className = props.className;
    parent.insertBefore(cvs, img.current);
    canvas.current = cvs;
  }

  function optCanvas(width, height) {
    let cvs = canvas.current;
    let ctx = cvs.getContext('2d');
    let fontSize = width / 8;

    cvs.width = width;
    cvs.height = height;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + 'px tabular-nums, Microsoft YaHei';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${width}X${height}`, width / 2, height / 2 + fontSize / 3);
  }

  return (
    <>
      {!loadErr && <img ref={img} {...props} onError={setFeedbackImg} />}
    </>
  );
};

Picture.defaultProps = {};

Picture.propTypes = {};

export default Picture;